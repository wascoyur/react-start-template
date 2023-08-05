import classNames from 'classnames';
import { useFormik } from 'formik';
import './add-redo-user-profile.scss';

export type typeUserForm = {
  customStyle?: string[];
};
export const SecurityUserForm = (props: typeUserForm) => {
  const { customStyle = 'default-style' } = props;
  const formik = useFormik({
    initialValues: {
      currentpassword: '',
      newpassword: '',
      repeetpassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={classNames(customStyle)}>
      <div className="profile-block">Изменить пароль</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="currentpassword">Пароль</label>
        <input
          id="currentpassword"
          name="currentpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.currentpassword}
        />

        <label htmlFor="newpassword">Новый пароль</label>
        <input
          id="newpassword"
          name="newpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.newpassword}
        />
        <label htmlFor="repeetpassword">Пароль</label>
        <input
          id="repeetpassword"
          name="repeetpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repeetpassword}
        />

        <button type="submit">Изменить</button>
      </form>
    </div>
  );
};
