import { useStore } from 'src/store/state';
import { LoginForm } from 'src/stories/components/profle/LoginForm';
import { ProfileUser } from 'src/stories/components/profle/ProfileUser';

export const LoginPage = () => {
  const tokenUser = useStore((state) => state.tokenUser);
  const tokenAdmin = useStore((state) => state.tokenAdmin);
  const clearTokens = useStore((state) => state.clearTokens);
  const isUserAuth = tokenUser || tokenAdmin;
  return (
    <div>
      {!isUserAuth && <h1>Логин или регистрация</h1>}

      {isUserAuth?.length ? (
        <>
          <ProfileUser />

          <div className="default-style">
            <button onClick={clearTokens}>Выйти из профиля</button>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
