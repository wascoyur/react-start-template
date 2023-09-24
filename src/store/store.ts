import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ApiResponseProduct } from 'src/homeworks/homework-5/ProductList';
import { ExternalUserProfile, userProfile } from 'src/types/userProfile';
import { TypeProduct } from 'src/types/typeProduct';

type Store = {
  tokenUser: string;
  userExternal: ExternalUserProfile;
  loggedUser: userProfile;
  tokenAdmin: string;
  bucket: Array<TypeProduct>;
  rawProducts: Array<ApiResponseProduct>;
  setTokenUser: (token: string) => void;
  setTokenAdmin: (token: string) => void;
  clearTokens: () => void;
  setRawProducts: (arr: Array<ApiResponseProduct>) => void;
  setExternalUser: (user: ExternalUserProfile) => void;
  setLoggedUser: (user: userProfile) => void;
  editLoggedUser: (user: userProfile) => void;
  addProductToBucket: (product: TypeProduct) => void;
};
export const useStore = create(
  immer<Store>((set, get) => ({
    tokenUser: null,
    tokenAdmin: null,
    userExternal: null,
    rawProducts: null,
    loggedUser: null,
    bucket: null,
    setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
    setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
    clearTokens: () =>
      set(() => ({
        tokenUser: null,
        tokenAdmin: null,
      })),
    setRawProducts: (arr: Array<ApiResponseProduct>) => set(() => ({ rawProducts: arr })),
    setExternalUser: (user: ExternalUserProfile) => set(() => ({ userExternal: user })),
    setLoggedUser: (user: userProfile) =>
      set((state) => {
        if (!state.loggedUser) state.loggedUser = user;
      }),
    editLoggedUser: (user: userProfile) => {
      set((state) => {
        state.loggedUser.username = user.username;
        state.loggedUser.about = user.about;
      });
    },
    addProductToBucket: (product: TypeProduct) =>
      set((state) => {
        const currentBucket = get().bucket || new Array<TypeProduct>();
        state.bucket = [...currentBucket, product];
      }),
  }))
);
