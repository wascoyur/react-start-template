import classNames from 'classnames';
import { FormikErrors, useFormik } from 'formik';
import React from 'react';
import '../scss/common-form.scss';

export type propsShareForm = {
  customStyle?: string[];
};
export type PrfileForm = {
  username: string;
  about: string;
  email: string;
  password: string;
  repeatpassword?: string;
};
export const RedoUserProfileForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;
  const validate = (values: PrfileForm) => {
    const errors: FormikErrors<PrfileForm> = {};
    if (!values.username) {
      errors.username = `Необходимо указать свой псевдоним`;
    }
    if (values.username.length < 5) {
      errors.username = `Количество символов в псевдониме должно быть более 5`;
    }
    return errors;
  };
  const formik = useFormik<PrfileForm>({
    initialValues: {
      username: '',
      about: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validate,
  });
  return (
    <div className={classNames(customStyle)}>
      <div className="title-forms">Изменить профиль</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="useralias">Псевдоним</label>
        <input
          className={classNames(formik.errors.username ? 'input-error' : '')}
          id="useralias"
          name="useralias"
          type="text"
          onChange={(e) => {
            formik.handleChange(e);
            formik.setErrors({});
          }}
          value={formik.values.username}
          placeholder="Придумайте себе псевдоним"
        />
        {formik.errors.username ? <div className="validate-message">{formik.errors.username}</div> : null}
        <label htmlFor="about">О себе</label>
        <textarea
          id="about"
          name="about"
          onChange={formik.handleChange}
          value={formik.values.about}
          placeholder="Напишите пару слов о себе"
        />

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
