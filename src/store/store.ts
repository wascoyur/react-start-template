import { create } from 'zustand';
import { ApiResponseProduct } from 'src/homeworks/homework-5/ProductList';
import { ExternalUserProfile } from 'src/types/userProfile';

type Store = {
  tokenUser: string;
  user: ExternalUserProfile;
  tokenAdmin: string;
  rawProducts: Array<ApiResponseProduct>;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
  setRawProducts: (arr: Array<ApiResponseProduct>) => void;
  setUserLogged: (user: ExternalUserProfile) => void;
};
export const useStore = create<Store>()((set) => ({
  tokenUser: null,
  tokenAdmin: null,
  user: null,
  rawProducts: null,
  setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
  setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
  clearTokens: () =>
    set(() => ({
      tokenUser: null,
      tokenAdmin: null,
    })),
  setRawProducts: (arr: Array<ApiResponseProduct>) => set(() => ({ rawProducts: arr })),
  setUserLogged: (user: ExternalUserProfile) => set(() => ({ user })),
}));
