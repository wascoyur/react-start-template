import { RegisterUser } from 'src/stories/components/hw-6-Forms/RegisterUser';
import { SecurityUserForm } from 'src/stories/components/hw-6-Forms/SecurityUserForm';
import { useStore } from 'src/store/store';
import { LoginForm } from 'src/stories/components/hw-6-Forms/LoginForm';

export const LoginPage = () => {
  const token = useStore((state) => state.token);
  return (
    <div>
      <h1>Логин/регистрация</h1>
      {/*isHasToken?*/}

      {!token ? (
        <LoginForm />
      ) : (
        <>
          <SecurityUserForm />
          <RegisterUser />
        </>
      )}
    </div>
  );
};
