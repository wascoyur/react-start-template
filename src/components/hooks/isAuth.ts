import { useStore } from 'src/store/state';

export const useUserAuth = () => {
  const { tokenUser, tokenAdmin } = useStore();
  return Boolean(tokenUser || tokenAdmin);
};
