import classNames from 'classnames';
import { Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import { PrfileForm, propsShareForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import './add-redo-user-profile.scss';

export const UserRegisterForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;
  let errors: FormikErrors<PrfileForm> = {};
  const validate = (values: PrfileForm) => {
    errors = {};
    if (!values.useralias) {
      errors.useralias = `Укажите ваш псевдоним`;
    }
    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = `Проверьте правильность написания почтового адреса`;
    }
    if (!values.about) {
      errors.about = `Необходимо заполнить раздел "О себе"`;
    }
    if (!values.password) {
      errors.password = `Необходимо указать пароль`;
    }
    if (values.password) {
      validatePassword(values);
    }

    return errors;
  };

  const validatePassword = ({ password, repeatpassword }: PrfileForm) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/.test(password);

    if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter && password.length > 5)) {
      errors.password = 'Пароль недостаточно сложный';
      return;
    }
    if (password !== repeatpassword) {
      errors.repeatpassword = 'Пароли не совпадают';
    }
  };

  return (
    <div className={classNames(customStyle)}>
      <div className="title-forms">Зарегистрировать нового пользователя</div>
      <Formik
        initialValues={{ useralias: '', email: '', password: '', about: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={validate}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="useralias">Ваш псевдоним</label>
            <Field name="useralias" />
            {errors.useralias ? <div className="validate-message">{errors.useralias}</div> : null}

            <label htmlFor="email">Ваш email</label>
            <Field name="email" type="email" />
            {errors.email ? <div className="validate-message">{errors.email}</div> : null}

            <label htmlFor="password">Ваш пароль</label>
            <Field name="password" type="password" />
            {errors.password ? <div className="validate-message">{errors.password}</div> : null}

            <label htmlFor="repeatpassword">Повторите ваш пароль</label>
            <Field name="repeatpassword" type="password" />
            {errors.repeatpassword ? <div className="validate-message">{errors.repeatpassword}</div> : null}

            <label htmlFor="description">Расскажите немного о себе</label>
            <Field name="about" as="textarea" />
            {errors.about ? <div className="validate-message">{errors.about}</div> : null}

            <button type="submit">Сохранить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
