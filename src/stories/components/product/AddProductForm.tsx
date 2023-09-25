import classNames from 'classnames';
import { Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import { propsShareForm } from 'src/stories/components/profle/RedoUserProfileForm';
import productImage from '../../assets/products/card-img.jpg';
import { ProductImage } from '../cards-product/ProductCard';
import '../scss/common-form.scss';
import { TypeProduct } from 'src/types/typeProduct';

export const AddProductForm = (props: propsShareForm) => {
  const { customStyle = 'default-style' } = props;

  const validate = (values: TypeProduct) => {
    const errors: FormikErrors<TypeProduct> = {};
    if (!values.title) {
      errors.title = `Необходимо указать название товара`;
    }
    if (!values.desc) {
      errors.desc = `Необходимо добавить описание товара`;
    }
    if (!values.price) {
      errors.price = `Необходимо указать цену товара`;
    }
    if (!values.category.name) {
      errors.category.name = `Необходимо указать категорию товара`;
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
        initialValues={{ title: '', category: null, desc: '', price: 0, img_url: '', id: 0, brand: '' }}
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
            {errors.category.name ? <div className="validate-message">{errors.category.name}</div> : null}

            <label htmlFor="description">Описание товара</label>
            <Field name="description" />
            {errors.desc ? <div className="validate-message">{errors.desc}</div> : null}

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
