import classNames from 'classnames';
import { FormikErrors, useFormik } from 'formik';
import './add-redo-user-profile.scss';

export type propsShareForm = {
  customStyle?: string[];
};
export type PrfileForm = {
  useralias: string;
  about: string;
};
export const AddRedoUserForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;
  const validate = (values: PrfileForm) => {
    const errors: FormikErrors<PrfileForm> = {};
    if (!values.useralias) {
      errors.useralias = `Необходимо указать свой псевдоним`;
    }
    if (values.useralias.length < 5) {
      errors.useralias = `Количество символов в псевдониме должно быть более 5`;
    }
    return errors;
  };
  const formik = useFormik<PrfileForm>({
    initialValues: {
      useralias: '',
      about: '',
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
          className={classNames(formik.errors.useralias ? 'input-error' : '')}
          id="useralias"
          name="useralias"
          type="text"
          onChange={(e) => {
            formik.handleChange(e);
            formik.setErrors({});
          }}
          value={formik.values.useralias}
          placeholder="Придумайте себе псевдоним"
        />
        {formik.errors.useralias ? <div className="validate-message">{formik.errors.useralias}</div> : null}
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
