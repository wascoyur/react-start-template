import { jsx as _jsx } from "react/jsx-runtime";
import './header.scss';
export const Header = (props) => {
    return (_jsx("header", { className: "header", children: _jsx("div", { className: "header-content", children: props.children }) }));
};
//# sourceMappingURL=Header.js.map