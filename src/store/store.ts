import { create } from 'zustand';
import { typeProduct } from 'src/homeworks/ts1/3_write';

type TokenStore = {
  tokenUser: string;
  user: unknown;
  tokenAdmin: string;
  products: Array<typeProduct>;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
  setProducts: (arr: Array<typeProduct>) => void;
};
export const useStore = create<TokenStore>()((set) => ({
  tokenUser: '',
  tokenAdmin: '',
  user: '',
  products: null,
  setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
  setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
  clearTokens: () =>
    set(() => ({
      tokenUser: '',
      tokenAdmin: '',
    })),
  setProducts: (arr: Array<typeProduct>) => set(() => ({ products: arr })),
}));
