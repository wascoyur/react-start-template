import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import './product-list.scss';
export const ProductItem = (props) => {
    var _a;
    const { item: { name, price, category }, } = props;
    const itemClssNames = (_a = props.itemClssNames) !== null && _a !== void 0 ? _a : 'product-item';
    return (_jsxs("div", { className: classNames(itemClssNames), children: [_jsx("h4", { children: name }), _jsx("div", { children: `категория: ${category}` }), _jsxs("p", { children: ["Price: ", price] })] }));
};
//# sourceMappingURL=ProductItem.js.map