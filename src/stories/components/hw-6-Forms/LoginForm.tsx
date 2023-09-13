import { FormEvent, useEffect, useState } from 'react';
import '../scss/common-form.scss';
import { useStore } from 'src/store/store';

export const LoginForm = () => {
  const setToken = useStore();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (login.length > 0 && password.length > 0) {
      setIsFilled(true);
      return;
    }
    setIsFilled(false);
  }, [login, password]);
  const handleLogInUser = (e: FormEvent) => {
    console.log(login, password);
    e.preventDefault();
    if (login === 'admin' && password === 'admpass') {
      setToken.setTokenAdmin(login);
      return;
    }
    if (login === 'user' && password === 'password') {
      setToken.setTokenUser(login);
      return;
    }
  };

  return (
    <div className="default-style">
      <form onSubmit={handleLogInUser}>
        <label htmlFor="login">Ваш логин: user/admin</label>
        <input type="text" name="login" onChange={(e) => setLogin(e.target.value)} />
        <label htmlFor="password">Введите пароль: password/admpass</label>
        <input type="password" name="passwoord" onChange={(e) => setPassword(e.target.value)} />
        <button type={'submit'} disabled={!isFilled}>
          Войти
        </button>
      </form>
    </div>
  );
};
