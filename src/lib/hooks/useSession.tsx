import React, { createContext, useContext, useEffect, useState } from 'react';

interface ExamSessionContextType {
  isActive: boolean;
  startSession: () => void;
  endSession: () => void;
}

const ExamSessionContext = createContext<ExamSessionContextType | undefined>(
  undefined
);

const SESSION_DURATION = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

export const ExamSessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Check for an existing session on component mount
  useEffect(() => {
    const sessionStart = localStorage.getItem('examSessionStart');
    if (sessionStart) {
      const startTime = parseInt(sessionStart, 10);
      const now = Date.now();
      if (now - startTime < SESSION_DURATION) {
        setIsActive(true);
        // Set a timer to automatically end the session when time is up
        const timeoutId = setTimeout(() => {
          endSession();
        }, SESSION_DURATION - (now - startTime));
        return () => clearTimeout(timeoutId);
      } else {
        endSession();
      }
    }
  }, []);

  const startSession = () => {
    const now = Date.now();
    localStorage.setItem('examSessionStart', now.toString());
    setIsActive(true);
    setTimeout(() => {
      endSession();
    }, SESSION_DURATION);
  };

  const endSession = () => {
    localStorage.removeItem('examSessionStart');
    setIsActive(false);
    // Optionally: Trigger a redirect or show an expired session message
  };

  return (
    <ExamSessionContext.Provider value={{ isActive, startSession, endSession }}>
      {children}
    </ExamSessionContext.Provider>
  );
};

export const useExamSession = () => {
  const context = useContext(ExamSessionContext);
  if (context === undefined) {
    throw new Error(
      'useExamSession must be used within an ExamSessionProvider'
    );
  }
  return context;
};
