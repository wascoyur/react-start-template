import React, { useEffect, useState } from 'react';
import Loader from 'src/stories/components/share/Loader';
import 'src/stories/components/scss/profile-card.scss';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { userProfile, typeUserProfileCardProps, ExternalUserProfile } from 'src/types/userProfile';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';
import { useStore } from 'src/store/state';
import { createUserHelper } from 'src/common-functions/userHelper';
import { useCreateUser } from 'src/mock-data/mock-profile';

export const ProfileUser = () => {
  // const [toChangePass, setToChangePass] = useState<boolean>(false);
  const [toChangeProfile, setToChangeProfile] = useState<boolean>(false);
  const userExternal = useStore((store) => store.userExternal);
  const loggedUser = useStore((store) => store.loggedUser);

  useCreateUser(userExternal);

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
      <div className="field">Имя </div>
      <div className="field-value">{user.name}</div>
      <div className="field">Псевдоним </div>
      <div className="field-value">{user.username}</div>
      <div className="field">Телефон </div>
      <div className="field-value">{user.phone}</div>
      <div className="field">email</div>
      <div className="field-value">{user.email}</div>
      <div className="field">Компания</div>
      <div className="field-value">{user?.company?.name}</div>
      <div className="field">Город</div>
      <div className="field-value">{user?.address?.city}</div>
      <div className="field">О себе</div>
      <div className="field-value">{user?.about}</div>
      <button onClick={onEditProfile}>Редактировать профиль</button>
    </div>
  );
};
