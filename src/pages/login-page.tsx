import { useStore } from 'src/store/store';
import { LoginForm } from 'src/stories/components/profle/LoginForm';
import { ProfileUser } from 'src/stories/components/profle/ProfileUser';
import { useUserAuth } from 'src/components/hooks/isAuth';

export const LoginPage = () => {
  const token = useStore();
  const isUserAuth = useUserAuth();
  return (
    <div>
      {!isUserAuth && <h1>Логин/регистрация</h1>}

      {isUserAuth ? (
        <>
          <ProfileUser />

          <div className="default-style">
            <button onClick={token.clearTokens}>Выйти из профиля</button>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
