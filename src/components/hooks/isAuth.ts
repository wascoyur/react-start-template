import { useStore } from 'src/store/state';

export const useUserAuth = () => {
  const tokenUser = useStore((state) => state.tokenUser);
  const tokenAdmin = useStore((state) => state.tokenAdmin);
  return Boolean(tokenUser || tokenAdmin);
};
