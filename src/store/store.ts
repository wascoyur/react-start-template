import { create } from 'zustand';
import { ApiResponseProduct } from 'src/homeworks/homework-5/ProductList';
import { ExternalUserProfile, userProfile } from 'src/types/userProfile';

type Store = {
  tokenUser: string;
  userExternal: ExternalUserProfile;
  loggedUser: userProfile;
  tokenAdmin: string;
  rawProducts: Array<ApiResponseProduct>;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
  setRawProducts: (arr: Array<ApiResponseProduct>) => void;
  setExternalUser: (user: ExternalUserProfile) => void;
  setLoggedUser: (user: userProfile) => void;
};
export const useStore = create<Store>()((set) => ({
  tokenUser: null,
  tokenAdmin: null,
  userExternal: null,
  rawProducts: null,
  loggedUser: null,
  setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
  setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
  clearTokens: () =>
    set(() => ({
      tokenUser: null,
      tokenAdmin: null,
    })),
  setRawProducts: (arr: Array<ApiResponseProduct>) => set(() => ({ rawProducts: arr })),
  setExternalUser: (user: ExternalUserProfile) => set(() => ({ userExternal: user })),
  setLoggedUser: (user: userProfile) => set((loggedUser) => ({ ...loggedUser, ...user })),
}));
