import { Formik } from 'formik';
import React from 'react';
import './page-profile.scss';

export const ProfileScreen = () => {
  const HandleSubmit = () => {
    console.log('values');
  };

  return (
    <div className="profile-screen">
      <h3>Изменить профиль</h3>
      <div className="profile-section">
        <Formik initialValues={{ alias: '', about: '' }} onSubmit={HandleSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="alias">Псевдоним</label>
              <input
                type="text"
                name="alias"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.alias}
                placeholder={'Ваш псевдоним'}
              />

              {errors.alias && touched.alias && errors.alias}

              <label htmlFor="about">О себе</label>
              <textarea
                name="about"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.about}
                placeholder={'Расскажите о себе...'}
              />
              {errors.about && touched.about && errors.about}
              <button type="submit" disabled={isSubmitting}>
                Сохранить
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div className="profile-section">
        <h3>Изменить пароль</h3>
        {/*noinspection SpellCheckingInspection*/}
        <Formik initialValues={{ password: '', newpassword: '', repeatpassword: '' }} onSubmit={HandleSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder={'Пароль'}
              />

              {errors.password && touched.password && errors.password}

              <label htmlFor="newpassword">Новый пароль</label>
              <input
                type="password"
                name="newpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newpassword}
                placeholder={'Новый пароль'}
              />

              {errors.newpassword && touched.newpassword && errors.newpassword}

              <label htmlFor="repeatpassword">Повторите пароль</label>
              <input
                type="password"
                name="repeatpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatpassword}
                placeholder={'Повторите пароль'}
              />

              {errors.repeatpassword && touched.repeatpassword && errors.repeatpassword}

              <button type="submit" disabled={isSubmitting}>
                Изменить
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
