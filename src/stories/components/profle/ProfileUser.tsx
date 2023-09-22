import React, { useEffect, useState } from 'react';
import Loader from 'src/stories/components/share/Loader';
import 'src/stories/components/scss/profile-card.scss';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { userProfile, typeUserProfileCardProps, ExternalUserProfile } from 'src/types/userProfile';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';
import { useStore } from 'src/store/store';

export const ProfileUser = () => {
  // const [toChangePass, setToChangePass] = useState<boolean>(false);
  const [toChangeProfile, setToChangeProfile] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<userProfile | null>(null);
  const { user } = useStore();

  useEffect(() => {
    user && setLoggedUser(createUserHelper(user));
  }, [user]);

  const handleProfile = () => {
    setToChangeProfile(true);
  };
  const createUserHelper = (data: ExternalUserProfile): userProfile => {
    let user = {} as userProfile;
    user = {
      address: {
        city: data.address.city,
        geo: { lat: data.address.coordinates.lat, lng: data.address.coordinates.lng },
        street: data.address.address,
        suite: '',
        zipcode: data.address.postalCode,
      },
      company: { bs: data.company.department, catchPhrase: '', name: data.company.title },
      email: data.email,
      id: data.id,
      phone: data.phone,
      username: data.username,
      website: '',
      name: data.firstName,
    };
    return user;
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
