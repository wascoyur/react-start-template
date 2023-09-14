import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import productImage from '../../assets/products/card-img.jpg';
import { ProductImage } from '../cards-product/ProductCard';
import './add-redo-user-profile.scss';
export const AddProductForm = (props) => {
    const { customStyle = 'default-style' } = props;
    const validate = (values) => {
        const errors = {};
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
    return (_jsxs("div", { className: classNames(customStyle), children: [_jsx("div", { className: "title-forms", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0442\u043E\u0432\u0430\u0440" }), _jsx(Formik, { initialValues: { title: '', category: '', description: '', price: 0, img_url: '', id: 0 }, onSubmit: (values) => {
                    console.log(values);
                }, validate: validate, children: ({ errors }) => (_jsxs(Form, { children: [_jsx("label", { htmlFor: "title", children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx(Field, { name: "title" }), errors.title ? _jsx("div", { className: "validate-message", children: errors.title }) : null, _jsx("label", { htmlFor: "price", children: "\u0426\u0435\u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx(Field, { name: "price", type: "number" }), errors.price ? _jsx("div", { className: "validate-message", children: errors.price }) : null, _jsx("label", { htmlFor: "category", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsxs(Field, { as: "select", name: "category", children: [_jsx("option", { value: "cat", children: "cat" }), _jsx("option", { value: "mouse", children: "mouse" }), _jsx("option", { value: "dog", children: "dog" }), _jsx("option", { value: "foo", children: "foo" })] }), errors.category ? _jsx("div", { className: "validate-message", children: errors.category }) : null, _jsx("label", { htmlFor: "description", children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx(Field, { name: "description" }), errors.description ? _jsx("div", { className: "validate-message", children: errors.description }) : null, _jsx("label", { htmlFor: "url", children: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx(ProductImage, { img_url: productImage }), _jsx(Field, { type: "file", name: "url" }), _jsx("button", { type: "submit", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] })) })] }));
};
//# sourceMappingURL=AddProductForm.js.map