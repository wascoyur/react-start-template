import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ExternalUserProfile, userProfile } from 'src/types/userProfile';
import { ApiResponseProduct, TypeProduct } from 'src/types/typeProduct';
import { BucketItem } from 'src/types/typeStore';
import { persist } from 'zustand/middleware';

type State = {
  tokenUser: string;
  tokenAdmin: string;
  userExternal: ExternalUserProfile;
  loggedUser: userProfile;
  rawProducts: Array<ApiResponseProduct>;
  bucket: Array<BucketItem>;
  products: Array<TypeProduct>;
};
type Action = {
  setTokenUser: (token: State['tokenUser']) => void;
  setTokenAdmin: (token: State['tokenAdmin']) => void;
  clearTokens: () => void;
  setRawProducts: (arr: State['rawProducts']) => void;
  setExternalUser: (user: State['userExternal']) => void;
  setLoggedUser: (user: State['loggedUser']) => void;
  editLoggedUser: (user: State['loggedUser']) => void;
  setBucket: (product: BucketItem) => void;
  getProductById: (idProduct: number) => TypeProduct;
  setProducts: (products: Array<TypeProduct>) => void;
  isUserAuth: () => boolean;
  getBucket: () => { product: TypeProduct; count: number }[];
  removeItemBucketById: (id: number) => void;
};
export const useStore = create(
  persist(
    immer<State & Action>((set, get) => ({
      tokenUser: null,
      tokenAdmin: null,
      userExternal: null,
      rawProducts: null,
      loggedUser: null,
      bucket: null,
      products: null,
      setTokenUser: (newToken: string) => set(() => ({ tokenUser: newToken })),
      setTokenAdmin: (newTokenAdm: string) => set(() => ({ tokenAdmin: newTokenAdm })),
      clearTokens: () =>
        set(() => ({
          tokenUser: null,
          tokenAdmin: null,
        })),
      isUserAuth: () => {
        return Boolean((get().tokenUser || get().tokenAdmin) && Boolean(get().loggedUser?.id));
      },
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
      setBucket: (bucketItem: BucketItem) =>
        set((state) => {
          if (!get().bucket) {
            state.bucket = new Array(bucketItem);
            return;
          }
          const exsistingProductIndex = get().bucket.findIndex((item) => item.productId === bucketItem.productId);
          if (exsistingProductIndex !== -1) {
            // Если продукт с таким productId уже существует, увеличиваем его count
            state.bucket[exsistingProductIndex].count = get().bucket[exsistingProductIndex].count + bucketItem.count;
          } else {
            // Если продукта с таким productId нет, добавляем его в коллекцию
            state.bucket.push(bucketItem);
          }
        }),
      setProducts: (products: Array<TypeProduct>) =>
        set((state) => {
          const currentState = state?.products || new Array<TypeProduct>();
          state.products = [...currentState, ...products];
        }),
      getProductById: (id: number) => {
        const allProducts = get().products || new Array<TypeProduct>();
        return allProducts.filter((p) => p.id == id)[0];
      },
      getBucket: () => {
        const bucket = get()?.bucket || [];
        const products = bucket.map((p) => {
          return { product: get().getProductById(p.productId), count: p.count };
        });
        return products;
      },
      removeItemBucketById: (id: number) =>
        set((state) => {
          const newBucket: BucketItem[] = state.bucket.filter((i) => i.productId !== id);
          console.log({ newBucket });
          state.bucket = newBucket;
        }),
    })),
    {
      name: `tokens`,
      partialize: (state) => ({ tokenUser: state.tokenUser, tokenAdmin: state.tokenAdmin, bucket: state.bucket }),
    }
  )
);
