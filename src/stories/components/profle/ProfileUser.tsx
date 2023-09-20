import { useEffect, useState } from 'react';
import { useGetRandomUser } from 'src/mock-data/mock-profile';
import Loader from 'src/stories/components/share/Loader';
import 'src/stories/components/scss/profile-card.scss';

export const ProfileUser = () => {
  // const [toChangePass, setToChangePass] = useState<boolean>(false);
  // const [toChangeProfile, setToChangeProfile] = useState<boolean>(false);
  const [randomUser, setRandomUser] = useState<typeUser>();
  const user = useGetRandomUser();

  useEffect(() => {
    setRandomUser(user);
  }, [user]);

  return (
    <div className="default-style">
      <h2>Profile</h2>

      {randomUser ? (
        <div className="profile-card">
          <div className="field">Имя пользователя </div>
          <div className="field-value">{randomUser.name}</div>
          <div className="field">Псевдоним пользователя </div>
          <div className="field-value">{randomUser.username}</div>
          <div className="field">Телефон пользователя </div>
          <div className="field-value">{randomUser.phone}</div>
          <div className="field">Электронная почта пользователя </div>
          <div className="field-value">{randomUser.email}</div>
          <button>Редактировать профиль</button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export type typeUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: number; lng: number };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
};
