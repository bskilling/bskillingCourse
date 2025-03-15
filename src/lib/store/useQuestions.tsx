import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizAnswersState {
  answers: { [key: number]: number | null };
  setAnswer: (questionNumber: number, answer: number) => void;
  clearAnswers: () => void;
  setAllAnswers: (newAnswers: { [key: number]: number | null }) => void;
}

export const useQuizAnswersStore = create<QuizAnswersState>()(
  persist(
    (set) => ({
      // Prepopulate keys 1 through 50 with null
      answers: Array.from({ length: 50 }, (_, i) => i).reduce((acc, key) => {
        acc[key] = null;
        return acc;
      }, {} as { [key: number]: number | null }),
      setAllAnswers: (newAnswers) => set(() => ({ answers: newAnswers })),
      setAnswer: (questionNumber, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionNumber]: answer },
        })),
      clearAnswers: () =>
        set({
          answers: Array.from({ length: 50 }, (_, i) => i).reduce(
            (acc, key) => {
              acc[key] = null;
              return acc;
            },
            {} as { [key: number]: number | null }
          ),
        }),
    }),
    {
      name: 'quiz-answers', // key used in localStorage
      getStorage: () => localStorage,
    }
  )
);
