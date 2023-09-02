import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../button/Button';
import './in-cart-button.scss';
export const InCartButton = (props) => {
    const { count } = props;
    const InCart = () => {
        return (_jsx("div", { className: "button-in-cart", children: _jsx(Button, { label: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443", backgroundColor: "#1ea7fd" }) }));
    };
    const Input = () => {
        const backgroundColor = '#1ea7fd';
        return (_jsxs("div", { className: "card-count-input", children: [_jsx(Button, { label: '-', backgroundColor: backgroundColor }), _jsx("input", { value: 0 }), _jsx(Button, { label: '+', backgroundColor: backgroundColor })] }));
    };
    return (_jsx("div", { className: "add-to-cart-button", children: count > 0 ? (_jsx(InCart, {})) : (_jsx("div", { className: "card-count-input", children: _jsx(Input, {}) })) }));
};
//# sourceMappingURL=InCartButton.js.map