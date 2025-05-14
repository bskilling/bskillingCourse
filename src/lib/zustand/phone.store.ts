// payment-store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface PhonePeToken {
  access_token: string;
  encrypted_access_token: string;
  expires_in: null;
  issued_at: number;
  expires_at: number;
  session_expires_at: number;
  token_type: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

interface PaymentDetails {
  merchantOrderId: string;
  merchantTransactionId: string;
  amount: number;
  status: 'INITIATED' | 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
}

interface PaymentStore {
  user: User | null;
  phonepeToken: PhonePeToken | null;
  paymentResponse: PaymentDetails | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User) => void;
  setPhonePeToken: (token: PhonePeToken) => void;
  setPaymentResponse: (response: PaymentDetails) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

// Convert to persistent store that will be saved to localStorage
export const usePaymentStore = create<PaymentStore>()(
  persist(
    set => ({
      user: null,
      phonepeToken: null,
      paymentResponse: null,
      isLoading: false,
      error: null,
      setUser: user => set({ user }),
      setPhonePeToken: token => set({ phonepeToken: token }),
      setPaymentResponse: response => set({ paymentResponse: response }),
      setLoading: loading => set({ isLoading: loading }),
      setError: error => set({ error }),
      reset: () =>
        set({
          user: null,
          phonepeToken: null,
          paymentResponse: null,
          isLoading: false,
          error: null,
        }),
    }),
    {
      name: 'payment-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      // You can add partialize here if you want to exclude certain fields from persistence
      // partialize: (state) => ({ user: state.user, paymentResponse: state.paymentResponse }),
    }
  )
);
