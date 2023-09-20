import { useStore } from 'src/store/store';
import { LoginForm } from 'src/stories/components/profle/LoginForm';
import { ProfileUser } from 'src/stories/components/profle/ProfileUser';

export const LoginPage = () => {
  const token = useStore();
  return (
    <div>
      <h1>Логин/регистрация</h1>

      {token.tokenUser.length || token.tokenAdmin.length ? (
        <>
          <ProfileUser />

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
