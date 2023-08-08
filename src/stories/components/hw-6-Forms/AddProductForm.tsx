import classNames from 'classnames';
import { Field, Form, Formik, FormikErrors } from 'formik';
import { propsShareForm } from 'src/stories/components/hw-6-Forms/AddRedoUserForm';
import productImage from '../../assets/products/card-img.jpg';
import { ProductImage, TypeProduct } from '../cards-product/ProductCard';
import './add-redo-user-profile.scss';

export const AddProductForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;

  const validate = (values: TypeProduct) => {
    const errors: FormikErrors<TypeProduct> = {};
    if (!values.title) {
      errors.title = `Необходимо указать название товара`;
    }
    if (!values.description) {
      errors.description = `Необходимо добавить описание товара`;
    }
    if (!values.price) {
      errors.price = `Необходимо указать цену товара`;
    }
    if (!values.category) {
      errors.category = `Необходимо указать категорию товара`;
    }
    if (!values.img_url) {
      errors.img_url = `Необходимо добавить изображение товара`;
    }
    return errors;
  };

  return (
    <div className={classNames(customStyle)}>
      <div className="title-forms">Добавить новый товар</div>
      <Formik
        initialValues={{ title: '', category: '', description: '', price: 0, img_url: '', id: 0 }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={validate}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="title">Название товара</label>
            <Field name="title" />
            {errors.title ? <div className="validate-message">{errors.title}</div> : null}

            <label htmlFor="price">Цена товара</label>
            <Field name="price" type="number" />
            {errors.price ? <div className="validate-message">{errors.price}</div> : null}

            <label htmlFor="category">Категория товара</label>
            <Field as="select" name="category">
              <option value="cat">cat</option>
              <option value="mouse">mouse</option>
              <option value="dog">dog</option>
              <option value="foo">foo</option>
            </Field>
            {errors.category ? <div className="validate-message">{errors.category}</div> : null}

            <label htmlFor="description">Описание товара</label>
            <Field name="description" />
            {errors.description ? <div className="validate-message">{errors.description}</div> : null}

            <label htmlFor="url">Изображение товара</label>
            <ProductImage img_url={productImage} />
            <Field type="file" name="url" />

            <button type="submit">Сохранить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
