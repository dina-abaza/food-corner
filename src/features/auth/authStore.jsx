import create from "zustand";
import { persist } from "zustand/middleware";

const useUserAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      clearAuth: () => set({ user: null, token: null }),
    }),
    {
      name: "user-auth-storage", 
    }
  )
);

export default useUserAuthStore;
