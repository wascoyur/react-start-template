import { RegisterUser } from 'src/stories/components/hw-6-Forms/RegisterUser';
import { SecurityUserForm } from 'src/stories/components/hw-6-Forms/SecurityUserForm';

export const LoginPage = () => {
  return (
    <div>
      <h1>Логин/регистрация</h1>
      {/*isHasToken?*/}
      <SecurityUserForm />
      <RegisterUser />
    </div>
  );
};
