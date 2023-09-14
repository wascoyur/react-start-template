import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import './add-redo-user-profile.scss';
export const UserRegisterForm = (props) => {
    const { customStyle = 'default-style' } = props;
    let errors = {};
    const validate = (values) => {
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
    const validatePassword = ({ password, repeatpassword }) => {
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
    return (_jsxs("div", { className: classNames(customStyle), children: [_jsx("div", { className: "title-forms", children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" }), _jsx(Formik, { initialValues: { useralias: '', email: '', password: '', about: '' }, onSubmit: (values) => {
                    console.log(values);
                }, validate: validate, children: ({ errors }) => (_jsxs(Form, { children: [_jsx("label", { htmlFor: "useralias", children: "\u0412\u0430\u0448 \u043F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C" }), _jsx(Field, { name: "useralias" }), errors.useralias ? _jsx("div", { className: "validate-message", children: errors.useralias }) : null, _jsx("label", { htmlFor: "email", children: "\u0412\u0430\u0448 email" }), _jsx(Field, { name: "email", type: "email" }), errors.email ? _jsx("div", { className: "validate-message", children: errors.email }) : null, _jsx("label", { htmlFor: "password", children: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx(Field, { name: "password", type: "password" }), errors.password ? _jsx("div", { className: "validate-message", children: errors.password }) : null, _jsx("label", { htmlFor: "repeatpassword", children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx(Field, { name: "repeatpassword", type: "password" }), errors.repeatpassword ? _jsx("div", { className: "validate-message", children: errors.repeatpassword }) : null, _jsx("label", { htmlFor: "description", children: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u0441\u0435\u0431\u0435" }), _jsx(Field, { name: "about", as: "textarea" }), errors.about ? _jsx("div", { className: "validate-message", children: errors.about }) : null, _jsx("button", { type: "submit", children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" })] })) })] }));
};
//# sourceMappingURL=UserRegisterForm.js.map