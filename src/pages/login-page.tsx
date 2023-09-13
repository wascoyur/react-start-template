import { ChangeUserPassword } from 'src/stories/components/hw-6-Forms/ChangeUserPassword';
import { useStore } from 'src/store/store';
import { LoginForm } from 'src/stories/components/hw-6-Forms/LoginForm';

export const LoginPage = () => {
  const token = useStore();
  return (
    <div>
      <h1>Логин/регистрация</h1>

      {token.tokenUser.length || token.tokenAdmin.length ? (
        <>
          <ChangeUserPassword />
          {/*<RegisterUser />*/}
          <div className="default-style">
            <button onClick={token.clearTokens}>Exit</button>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
