import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import productImage from '../../../stories/assets/products/card-img.jpg';
import { InCartButton } from '../in-cart-button/InCartButton';
import './product-card.scss';
export const ProductCard = (props) => {
    const { description, img_url, id, title, price, category } = props;
    const ProductImage = () => {
        return (_jsx("div", { className: "product-image", children: _jsx("img", { src: img_url || productImage, alt: 'product' }) }));
    };
    const Title = () => {
        return _jsx("div", { className: "product-card-title", children: title || `The Title product` });
    };
    const Description = () => {
        return _jsx("div", { className: "product-card-description", children: description || `Dedcription Product` });
    };
    const Category = () => {
        return _jsx("div", { className: "product-card-category", children: category || `category` });
    };
    const Pay = () => {
        return _jsxs("div", { className: "product-card-price", children: [price || 123, "\u0440."] });
    };
    return (_jsxs("div", { className: "product-card", children: [_jsx(Title, {}), _jsx(ProductImage, {}), _jsxs("div", { className: "product-info-wrapper", children: [_jsx(Category, {}), _jsx(Description, {}), _jsx(Pay, {}), _jsx("div", { className: "in-cart-wrapper", children: _jsx(InCartButton, {}) })] })] }));
};
//# sourceMappingURL=ProductCard.js.map