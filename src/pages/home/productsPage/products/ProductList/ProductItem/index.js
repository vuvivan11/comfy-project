import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cartSlice from '~/store/cartSlice';
import productListSlice from '~/store/productListSlice';
import { formatPrice } from '~/utils';

export default function ProductItem({ product }) {
    const { price, name, image } = product.fields;
    const dispatch = useDispatch();

    const handleAddCart = (product) => {
        const productCart = {
            id: product.id,
            fields: product.fields,
            amount: 1,
        };
        dispatch(cartSlice.actions.addCartItem(productCart));
        dispatch(cartSlice.actions.displayCart());
    };
    return (
        <article className="product">
            <div className="product-container">
                <img
                    src={`${image[0].thumbnails.large.url}`}
                    className="product-img img"
                    alt={`${image[0].filename}`}
                />
                <div className="product-icons">
                    <Link
                        to={`product/${product.id}`}
                        className="product-icon"
                        onClick={() => {
                            dispatch(productListSlice.actions.getRelatedProduct(product.fields.company));
                        }}
                    >
                        <i className="fas fa-search" />
                    </Link>
                    <button className="product-cart-btn product-icon" onClick={() => handleAddCart(product)}>
                        <i className="fas fa-shopping-cart" />
                    </button>
                </div>
            </div>
            <footer>
                <p className="product-name">{name}</p>
                <h4 className="product-price">{formatPrice(price)}</h4>
            </footer>
        </article>
    );
}
