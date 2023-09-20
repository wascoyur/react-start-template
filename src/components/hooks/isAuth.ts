import { useStore } from 'src/store/store';

export const useUserAuth = () => {
  const token = useStore();
  const auth = Boolean(token.tokenUser.length || token.tokenAdmin.length);
  return auth;
};
