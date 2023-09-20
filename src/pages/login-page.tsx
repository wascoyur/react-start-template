import { useStore } from 'src/store/store';
import { LoginForm } from 'src/stories/components/profle/LoginForm';
import { ProfileUser } from 'src/stories/components/profle/ProfileUser';

export const LoginPage = () => {
  const token = useStore();
  const userIsAuth = () => true; /*token.tokenUser.length || token.tokenAdmin.length;*/
  return (
    <div>
      {!userIsAuth() && <h1>Логин/регистрация</h1>}

      {userIsAuth() ? (
        <>
          <ProfileUser />

          <div className="default-style">
            <button onClick={token.clearTokens}>Выйти и</button>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
