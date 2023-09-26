import { useState, useEffect } from 'react';
import * as process from 'process';
import { useStore } from 'src/store/state';
import { ExternalUserProfile, userProfile } from 'src/types/userProfile';
import { createUserHelper } from 'src/common-functions/userHelper';

export const useGetExternalUser = (userId?: number) => {
  const [user, setUser] = useState<ExternalUserProfile>(null);
  const idx = Math.floor(Math.random() * 99) + 1;
  const { setExternalUser } = useStore();
  const { newUser } = useCreateUser(user);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/users/${userId ? userId : idx}`);
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        setUser(data);
        setExternalUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };

    fetchUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { newUser };
};
export const useCreateUser = (userData: ExternalUserProfile) => {
  let newUser: userProfile;
  const editLoggedUser = useStore((state) => state.editLoggedUser);
  const setLoggedUser = useStore((state) => state.setLoggedUser);
  useEffect(() => {
    if (userData) {
      newUser = createUserHelper(userData);
      setLoggedUser(newUser);
    }
  }, [userData]);
  return { newUser, editLoggedUser };
};
