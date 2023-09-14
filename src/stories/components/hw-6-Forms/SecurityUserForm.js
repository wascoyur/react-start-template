import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useFormik } from 'formik';
import './add-redo-user-profile.scss';
export const SecurityUserForm = (props) => {
    const { customStyle = 'default-style' } = props;
    const validate = (values) => {
        let errors = {};
        const valuesArray = Object.entries(values);
        const isExsistValidate = () => {
            const errorsFields = valuesArray.reduce((acc, [key, value]) => {
                if (!value) {
                    return Object.assign(Object.assign({}, acc), { [key]: `Необходимо указать пароль` });
                }
                return acc;
            }, {});
            errors = Object.assign(Object.assign({}, errors), errorsFields);
        };
        isExsistValidate();
        function isLengthAndComplexity(value) {
            // Check if the newpassword is at least 8 characters long
            if (value.newpassword.length < 8) {
                errors = Object.assign(Object.assign({}, errors), { newpassword: 'Длина пароля недостаточна' });
                return;
            }
            // Check for password complexity (this is a basic example)
            // You can add more sophisticated checks based on your requirements
            const hasUpperCase = /[A-Z]/.test(value.newpassword);
            const hasLowerCase = /[a-z]/.test(value.newpassword);
            const hasNumber = /\d/.test(value.newpassword);
            const hasSpecialCharacter = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/.test(value.newpassword);
            if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter)) {
                errors = Object.assign(Object.assign({}, errors), { newpassword: 'Сложность пароля недостаточна. Пароль должен содержать большие, маленькие буквы, спецсимволы в латинской раскладке' });
                return;
            }
        }
        function isEqualPasswords(values) {
            if (values.newpassword !== values.repeatpassword) {
                errors = Object.assign(Object.assign({}, errors), { repeatpassword: 'Пароли не совпадают' });
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
    return (_jsxs("div", { className: classNames(customStyle), children: [_jsx("div", { className: "title-forms", children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsxs("form", { onSubmit: formik.handleSubmit, children: [_jsx("label", { htmlFor: "currentpassword", children: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx("input", { id: "currentpassword", name: "currentpassword", type: "password", onChange: formik.handleChange, value: formik.values.currentpassword, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }), formik.errors.currentpassword && _jsx("div", { className: "validate-message", children: formik.errors.currentpassword }), _jsx("label", { htmlFor: "newpassword", children: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx("input", { id: "newpassword", name: "newpassword", type: "password", onChange: formik.handleChange, value: formik.values.newpassword, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }), formik.errors.newpassword && _jsx("div", { className: "validate-message", children: formik.errors.newpassword }), _jsx("label", { htmlFor: "repeetpassword", children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0432\u0432\u043E\u0434 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F" }), _jsx("input", { id: "repeatpassword", name: "repeatpassword", type: "password", onChange: formik.handleChange, value: formik.values.repeatpassword, placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }), formik.errors.repeatpassword && _jsx("div", { className: "validate-message", children: formik.errors.repeatpassword }), _jsx("button", { type: "submit", children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C" })] })] }));
};
//# sourceMappingURL=SecurityUserForm.js.map