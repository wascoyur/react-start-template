import { useState, useEffect } from 'react';
import * as process from 'process';
import { useStore } from 'src/store/store';
import { ExternalUserProfile } from 'src/types/userProfile';

export const useUserStore = (userId?: number) => {
  const [user, setUser] = useState<ExternalUserProfile>(null);
  const idx = Math.floor(Math.random() * 99) + 1;
  const { setExternalUser } = useStore();

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
};
