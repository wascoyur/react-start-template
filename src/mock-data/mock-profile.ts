import { useState, useEffect } from 'react';

export const useGetRandomUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getRandomUser = async () => {
      try {
        const idx = Math.floor(Math.random() * 20) + 1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idx}`);
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
  }, []);

  return user;
};
