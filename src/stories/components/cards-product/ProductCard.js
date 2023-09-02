import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import mockImage from '../../assets/products/card-img.jpg';
import { InCartButton } from '../in-cart-button/InCartButton';
import './product-card.scss';
export const ProductCard = (props) => {
    const { description, img_url, id, title, price, category } = props;
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
    return (_jsxs("div", { className: "product-card", children: [_jsx(Title, {}), _jsx(ProductImage, { img_url: mockImage }), _jsxs("div", { className: "product-info-wrapper", children: [_jsx(Category, {}), _jsx(Description, {}), _jsx(Pay, {}), _jsx("div", { className: "in-cart-wrapper", children: _jsx(InCartButton, {}) })] })] }));
};
export const ProductImage = (props) => {
    return (_jsx("div", { className: "product-image", children: _jsx("img", { src: props.img_url, alt: 'product' }) }));
};
//# sourceMappingURL=ProductCard.js.map