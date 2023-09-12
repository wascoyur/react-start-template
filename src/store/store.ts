import { create } from 'zustand';

type TokenStore = {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
};
export const useStore = create<TokenStore>()((set) => ({
  token: '',
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  clearToken: () => set({ token: '' }),
}));
