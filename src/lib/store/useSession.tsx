import { UserSessionResponse } from '@/components/pages/form/OTP';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudentSessionState {
  student: UserSessionResponse['student'] | null;
  sessionActive: boolean;
  sessionExpiry: number; // timestamp in milliseconds
  setStudentSession: (
    student: UserSessionResponse['student'],
    expiry: number
  ) => void;
  clearStudentSession: () => void;
}

export const useStudentSessionStore = create<StudentSessionState>()(
  persist(
    (set) => ({
      student: null,
      sessionActive: false,
      sessionExpiry: 0,
      setStudentSession: (student, expiry) =>
        set({ student, sessionActive: true, sessionExpiry: expiry }),
      clearStudentSession: () =>
        set({ student: null, sessionActive: false, sessionExpiry: 0 }),
    }),
    {
      name: 'student-session', // key in localStorage
      getStorage: () => localStorage,
    }
  )
);
