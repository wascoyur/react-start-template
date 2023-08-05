import classNames from 'classnames';
import { useFormik } from 'formik';
import './add-redo-user-profile.scss';

export type typeUserForm = {
  profileStyle?: string[];
};
export const AddRedoUserForm = (props: typeUserForm) => {
  const { profileStyle = 'default-style' } = props;
  const formik = useFormik({
    initialValues: {
      useralias: '',
      about: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={classNames(profileStyle)}>
      <div className="profile-block">Изменить профиль</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="useralias">Псевдоним</label>
        <input
          id="useralias"
          name="useralias"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.useralias}
        />
        <label htmlFor="about">О себе</label>
        <textarea id="about" name="about" onChange={formik.handleChange} value={formik.values.about} />

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
