import { createStore } from 'zustand';
import { typeUserProfile } from 'src/types/typeUserProfile';

export const useUserProfileStore = createStore<typeUserProfile>()((set) => ({
  setUserProfile: (profile: typeUserProfile) => set(() => ({})),
}));
