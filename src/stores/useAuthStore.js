import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  setAccessToken: (token) => set({ accessToken: token }),

  setTokens: (accessToken, refreshToken) => {
    set({
      isLoggedIn: true,
      accessToken,
      refreshToken,
    });
  },

  clearAuth: () => {
    set({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
    });
  },
}));
