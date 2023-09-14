import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import '../../stories/components/product/product-list.scss';
export const ProductList = (props) => {
    const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
    const [productList, setProductList] = useState();
    const getProducts = () => {
        const products = arrayMockProductsGenerate();
        setProductList(products);
    };
    useEffect(() => {
        getProducts();
    }, []);
    const ListItems = () => {
        return productList.map((product) => {
            return _jsx(ProductItem, { itemClssNames: itemClssNames, item: product }, product.createdAt);
        });
    };
    const EmptyList = () => _jsx("div", { children: "No Products" });
    return (_jsx("div", { className: classNames(listClssNames), children: productList && productList.length ? _jsx(ListItems, {}) : _jsx(EmptyList, {}) }));
};
//# sourceMappingURL=ProductList.js.map