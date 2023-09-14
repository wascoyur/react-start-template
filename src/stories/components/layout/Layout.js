import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';
import './layout.scss';
export const Layout = () => {
    const setActive = (isActive) => {
        return isActive ? 'active-link' : '';
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Header, { children: [_jsx(Logo, {}), _jsx(NavLink, { to: 'profile', className: ({ isActive }) => setActive(isActive), children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" }), _jsx(NavLink, { to: 'products', className: ({ isActive }) => setActive(isActive), children: "\u0422\u043E\u0432\u0430\u0440\u044B" }), _jsx(NavLink, { to: 'edit-products', className: ({ isActive }) => setActive(isActive), children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435/\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx(NavLink, { to: 'bucket', className: ({ isActive }) => setActive(isActive), children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), _jsx(NavLink, { to: 'register', className: ({ isActive }) => setActive(isActive), children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })] }), _jsx("main", { children: _jsx(Outlet, {}) })] }));
};
//# sourceMappingURL=Layout.js.map