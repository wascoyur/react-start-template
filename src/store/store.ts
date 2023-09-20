import { create } from 'zustand';

type TokenStore = {
  tokenUser: string;
  user: unknown;
  tokenAdmin: string;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
};
export const useStore = create<TokenStore>()((set) => ({
  tokenUser: '',
  tokenAdmin: '',
  user: '',
  setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
  setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
  clearTokens: () =>
    set(() => ({
      tokenUser: '',
      tokenAdmin: '',
    })),
}));
