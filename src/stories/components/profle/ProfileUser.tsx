import React, { useEffect, useState } from 'react';
import Loader from 'src/stories/components/share/Loader';
import 'src/stories/components/scss/profile-card.scss';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { userProfile, typeUserProfileCardProps, ExternalUserProfile } from 'src/types/userProfile';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';
import { useStore } from 'src/store/store';
import { createUserHelper } from 'src/common-functions/userHelper';

export const ProfileUser = () => {
  // const [toChangePass, setToChangePass] = useState<boolean>(false);
  const [toChangeProfile, setToChangeProfile] = useState<boolean>(false);
  // const [user, setUser] = useState<userProfile | null>(null);
  const userExternal = useStore((store) => store.userExternal);
  const setLoggedUser = useStore((store) => store.setLoggedUser);
  const loggedUser = useStore((store) => store.loggedUser);

  const newUser = useCreateUser(userExternal);
  useEffect(() => {
    userExternal && !loggedUser && setLoggedUser(newUser);
  }, [newUser, loggedUser]);

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

export const useCreateUser = (userData: ExternalUserProfile) => {
  const [newUser, setNewUser] = useState<userProfile | undefined>();
  useEffect(() => {
    if (userData) {
      const n = createUserHelper(userData);
      setNewUser(n);
    }
  }, [userData]);
  return newUser;
};
