import React from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils';
import cartSlice from '../../store/cartSlice';

export default function CartOverLay() {
    const { showCart } = useSelector((state) => state.cart);
    const { cartItem } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const renderCartItem = () => {
        return cartItem.map((item) => {
            const { price, name, image } = item.fields;
            return (
                <article className="cart-item" key={item.id}>
                    <img
                        src={`${image[0].thumbnails.large.url}`}
                        className="cart-item-img"
                        alt={`${image[0].filename}`}
                    />
                    <div>
                        <h4 className="cart-item-name">{name}</h4>
                        <p className="cart-item-price">{formatPrice(price)}</p>
                        <button
                            className="cart-item-remove-btn"
                            onClick={() => {
                                dispatch(cartSlice.actions.deleteCartItem(item));
                            }}
                        >
                            remove
                        </button>
                    </div>
                    <div>
                        <button
                            className="cart-item-increase-btn"
                            onClick={() => {
                                dispatch(cartSlice.actions.increaseItemQuantity(item));
                            }}
                        >
                            <i className="fas fa-chevron-up" />
                        </button>
                        <p className="cart-item-amount">{item.amount}</p>
                        <button
                            className="cart-item-decrease-btn"
                            onClick={() => {
                                dispatch(cartSlice.actions.decreaseItemQuantity(item));
                            }}
                        >
                            <i className="fas fa-chevron-down" />
                        </button>
                    </div>
                </article>
            );
        });
    };

    const calculated = () => {
        return cartItem.reduce((price, item) => {
            // console.log(item.fields.price * item.amount);
            return (price += item.fields.price * item.amount);
        }, 0);
    };

    return (
        <div className={`cart-overlay ${showCart ? 'show' : ''}`}>
            <aside className="cart">
                <button
                    className="cart-close"
                    onClick={() => {
                        dispatch(cartSlice.actions.hiddenCart());
                    }}
                >
                    <i className="fas fa-times" />
                </button>
                <header>
                    <h3 className="text-slanted">your bag</h3>
                </header>
                {/* cart items */}
                <div className="cart-items">{renderCartItem()}</div>
                {/* footer */}
                <footer className="cart-footer">
                    <h3 className="cart-total text-slanted">Total : {formatPrice(calculated())} </h3>
                    <button className="cart-checkout btn">checkout</button>
                </footer>
            </aside>
        </div>
    );
}
