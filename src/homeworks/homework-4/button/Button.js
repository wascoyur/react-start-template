var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'clsx';
import './button.css';
import { sum } from './sum';
/**
 * Primary UI component for user interaction
 */
export const Button = (_a) => {
    var { primary, backgroundColor, size, label } = _a, props = __rest(_a, ["primary", "backgroundColor", "size", "label"]);
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const onClick = () => {
        sum(4, 5);
    };
    return (_jsx("button", Object.assign({ type: "button", className: cn('storybook-button', `storybook-button--${size}`, mode), style: { backgroundColor: backgroundColor || 'green' }, onClick: onClick }, props, { children: label })));
};
//# sourceMappingURL=Button.js.map