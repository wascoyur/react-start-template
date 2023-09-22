import React, { useEffect, useState } from 'react';
import { useUserStore } from 'src/mock-data/mock-profile';
import Loader from 'src/stories/components/share/Loader';
import 'src/stories/components/scss/profile-card.scss';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { typeUserProfile, typeUserProfileCardProps } from 'src/types/typeUserProfile';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';

export const ProfileUser = () => {
  // const [toChangePass, setToChangePass] = useState<boolean>(false);
  const [toChangeProfile, setToChangeProfile] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<typeUserProfile | null>(null);
  const { user } = useUserStore();

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  const handleProfile = () => {
    setToChangeProfile(true);
  };

  function handleCloseModal() {
    setToChangeProfile(false);
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {loggedUser ? (
        <div>
          <ProfileCard user={loggedUser} onEditProfile={handleProfile} />
        </div>
      ) : (
        <Loader />
      )}

      {toChangeProfile && (
        <ModalWindow visible={true} onCloseModal={handleCloseModal} modalContent={<h3>Редактирование профиля</h3>}>
          <RegisterUser />
        </ModalWindow>
      )}
    </div>
  );
};

export const ProfileCard: React.FC<typeUserProfileCardProps> = ({ user, onEditProfile }) => {
  return (
    <div className="profile-card">
      <div className="field">Имя пользователя</div>
      <div className="field-value">{user.name}</div>
      <div className="field">Псевдоним пользователя</div>
      <div className="field-value">{user.username}</div>
      <div className="field">Телефон пользователя</div>
      <div className="field-value">{user.phone}</div>
      <div className="field">Электронная почта пользователя</div>
      <div className="field-value">{user.email}</div>
      <button onClick={onEditProfile}>Редактировать профиль</button>
    </div>
  );
};
