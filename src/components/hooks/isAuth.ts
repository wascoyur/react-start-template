import { useStore } from 'src/store/store';

export const useUserAuth = () => {
  const { tokenUser, tokenAdmin } = useStore();
  return Boolean(tokenUser || tokenAdmin);
};
