import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import './Modal-window.scss';
const ModalWindow = (props) => {
    const { children, onClick, visible } = props;
    const modal = () => {
        return (_jsx("div", { className: "modal-layout", children: _jsxs("div", { className: "modal-window", children: [_jsx("div", { className: "close-wrapper", children: _jsx("div", { className: "close-icon", onClick: onClick, children: "X" }) }), children ? children : _jsx("div", { children: "\u0427\u0442\u043E-\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E..." })] }) }));
    };
    return visible ? ReactDOM.createPortal(modal(), document.getElementById('modal')) : children;
};
export default ModalWindow;
//# sourceMappingURL=ModalWindow.js.map