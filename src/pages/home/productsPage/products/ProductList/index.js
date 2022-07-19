import React from 'react';
import './style.scss';
import { productListRemainingReducer } from '~/selector';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

export default function ProductList() {
    const productListRemaining = useSelector(productListRemainingReducer);

    const renderProducts = (productList) => {
        if (productList < 1) {
            return <h3 className="filter-error">sorry, no products matched your search</h3>;
        }
        return productList.map((product, index) => {
            return <ProductItem key={index} product={product} />;
        });
    };
    return <div className="products-container">{renderProducts(productListRemaining)}</div>;
}
