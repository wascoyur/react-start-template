import { useState, useEffect } from 'react';
import * as process from 'process';

export const useGetRandomUser = (userId = 1) => {
  const [user, setUser] = useState(null);
  const idx = Math.floor(Math.random() * 20) + 1;
  console.log(process.env);

  useEffect(() => {
    const getRandomUser = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/users/${userId ? userId : idx}`);
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };

    getRandomUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
