import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import LogoPicture from '../../assets/logo.jpg';
import './logo.scss';
export const Logo = () => {
    return (_jsx(NavLink, { to: ".", children: _jsx("div", { className: "logo", children: _jsx("img", { src: LogoPicture, alt: "logo", className: "logo-image" }) }) }));
};
//# sourceMappingURL=Logo.js.map