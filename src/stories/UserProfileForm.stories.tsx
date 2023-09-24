import React from 'react';
import { RedoUserProfileForm } from 'src/stories/components/profle/RedoUserProfileForm';
import { ChangeUserPassword } from 'src/stories/components/profle/ChangeUserPassword';
import { Divider } from './components/share/Divider';

export default {
  title: 'Форма редактирования профиля пользователя',
  component: RedoUserProfileForm,
};

export const AddRedoUserFormS = () => {
  return (
    <>
      <RedoUserProfileForm />
      <Divider />
      <ChangeUserPassword />
    </>
  );
};
