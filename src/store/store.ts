import { create } from 'zustand';
import { ApiResponseProduct } from 'src/homeworks/homework-5/ProductList';

type TokenStore = {
  tokenUser: string;
  user: unknown;
  tokenAdmin: string;
  rawProducts: Array<ApiResponseProduct>;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
  setRawProducts: (arr: Array<ApiResponseProduct>) => void;
};
export const useStore = create<TokenStore>()((set) => ({
  tokenUser: '',
  tokenAdmin: '',
  user: '',
  rawProducts: null,
  setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
  setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
  clearTokens: () =>
    set(() => ({
      tokenUser: '',
      tokenAdmin: '',
    })),
  setRawProducts: (arr: Array<ApiResponseProduct>) => set(() => ({ rawProducts: arr })),
}));
