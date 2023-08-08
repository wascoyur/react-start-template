import classNames from 'classnames';
import { FormikErrors, useFormik } from 'formik';
import { propsShareForm } from 'src/stories/components/hw-6-Forms/AddRedoUserForm';
import './add-redo-user-profile.scss';

type userSecurity = {
  currentpassword: string;
  newpassword: string;
  repeatpassword: string;
};
export const SecurityUserForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;
  const validate = (values: userSecurity) => {
    let errors: FormikErrors<userSecurity> = {};
    const valuesArray = Object.entries(values);
    const isExsistValidate = () => {
      const errorsFields = valuesArray.reduce((acc, [key, value]) => {
        if (!value) {
          return { ...acc, [key]: `Необходимо указать пароль` };
        }
        return acc;
      }, {});
      errors = { ...errors, ...errorsFields };
    };
    isExsistValidate();

    function isLengthAndComplexity(value: Pick<userSecurity, 'newpassword'>) {
      // Check if the newpassword is at least 8 characters long
      if (value.newpassword.length < 8) {
        errors = { ...errors, newpassword: 'Длина пароля недостаточна' };
        return;
      }

      // Check for password complexity (this is a basic example)
      // You can add more sophisticated checks based on your requirements
      const hasUpperCase = /[A-Z]/.test(value.newpassword);
      const hasLowerCase = /[a-z]/.test(value.newpassword);
      const hasNumber = /\d/.test(value.newpassword);
      const hasSpecialCharacter = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/.test(value.newpassword);

      if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter)) {
        errors = {
          ...errors,
          newpassword:
            'Сложность пароля недостаточна. Пароль должен содержать большие, маленькие буквы, спецсимволы в латинской раскладке',
        };
        return;
      }
    }

    function isEqualPasswords(values: userSecurity) {
      if (values.newpassword !== values.repeatpassword) {
        errors = { ...errors, repeatpassword: 'Пароли не совпадают' };
      }
    }

    isLengthAndComplexity(values);

    isEqualPasswords(values);

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      currentpassword: '',
      newpassword: '',
      repeatpassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });
  return (
    <div className={classNames(customStyle)}>
      <div className="title-forms">Изменить пароль</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="currentpassword">Текущий пароль</label>
        <input
          id="currentpassword"
          name="currentpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.currentpassword}
          placeholder="Введите текущий пароль"
        />
        {formik.errors.currentpassword && <div className="validate-message">{formik.errors.currentpassword}</div>}
        <label htmlFor="newpassword">Новый пароль</label>
        <input
          id="newpassword"
          name="newpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.newpassword}
          placeholder="Введите новый пароль"
        />
        {formik.errors.newpassword && <div className="validate-message">{formik.errors.newpassword}</div>}
        <label htmlFor="repeetpassword">Повторите ввод нового пароля</label>
        <input
          id="repeatpassword"
          name="repeatpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repeatpassword}
          placeholder="Повторите новый пароль"
        />
        {formik.errors.repeatpassword && <div className="validate-message">{formik.errors.repeatpassword}</div>}

        <button type="submit">Изменить</button>
      </form>
    </div>
  );
};
