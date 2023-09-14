import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal-window.scss';
const ModalWindow = (props) => {
    const { children, onClick, visible, modalContent = `Something happend...` } = props;
    const [isVisible, setIsVisible] = useState(visible);
    const onClose = () => {
        onClick && onClick();
        setIsVisible(false);
    };
    const modal = () => {
        return (_jsx("div", { className: "modal-layout", children: _jsxs("div", { className: "modal-window", children: [_jsx("div", { className: "close-wrapper", children: _jsx("div", { className: "close-icon", onClick: onClose, children: "X" }) }), _jsx("div", { className: "content", children: modalContent || _jsx("div", { children: "\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043F\u0443\u0441\u0442\u043E\u0435..." }) })] }) }));
    };
    const root = document.getElementById('root');
    return isVisible && root ? ReactDOM.createPortal(modal(), root) : children;
};
export default ModalWindow;
//# sourceMappingURL=ModalWindow.js.map