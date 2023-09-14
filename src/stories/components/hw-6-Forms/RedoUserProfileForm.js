import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useFormik } from 'formik';
import './add-redo-user-profile.scss';
export const RedoUserProfileForm = (props) => {
    const { customStyle = 'default-style' } = props;
    const validate = (values) => {
        const errors = {};
        if (!values.useralias) {
            errors.useralias = `Необходимо указать свой псевдоним`;
        }
        if (values.useralias.length < 5) {
            errors.useralias = `Количество символов в псевдониме должно быть более 5`;
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            useralias: '',
            about: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
        validate,
    });
    return (_jsxs("div", { className: classNames(customStyle), children: [_jsx("div", { className: "title-forms", children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C" }), _jsxs("form", { onSubmit: formik.handleSubmit, children: [_jsx("label", { htmlFor: "useralias", children: "\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C" }), _jsx("input", { className: classNames(formik.errors.useralias ? 'input-error' : ''), id: "useralias", name: "useralias", type: "text", onChange: (e) => {
                            formik.handleChange(e);
                            formik.setErrors({});
                        }, value: formik.values.useralias, placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0441\u0435\u0431\u0435 \u043F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C" }), formik.errors.useralias ? _jsx("div", { className: "validate-message", children: formik.errors.useralias }) : null, _jsx("label", { htmlFor: "about", children: "\u041E \u0441\u0435\u0431\u0435" }), _jsx("textarea", { id: "about", name: "about", onChange: formik.handleChange, value: formik.values.about, placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432 \u043E \u0441\u0435\u0431\u0435" }), _jsx("button", { type: "submit", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] })] }));
};
//# sourceMappingURL=RedoUserProfileForm.js.map