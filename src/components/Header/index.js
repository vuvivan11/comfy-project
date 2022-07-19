import React from 'react';
import './HeaderStyle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import activeSlice from '../../store/activeSlice';
import cartSlice from '../../store/cartSlice';

const navLinks = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'products',
        path: '/products',
    },
    {
        name: 'about',
        path: '/about',
    },
];

export default function Header({ exact }) {
    const { logoComply } = useSelector((state) => state.productList);
    const { cartItem } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalQuantity = () => {
        return cartItem.reduce((total, item) => {
            return (total += item.amount);
        }, 0);
    };
    return (
        <nav className={`navbar ${exact ? '' : 'page'}`}>
            <div className="nav-center">
                {/* links */}
                <div>
                    <button
                        className="toggle-nav"
                        onClick={() => {
                            dispatch(activeSlice.actions.displayNav());
                        }}
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <ul className="nav-links">
                        {navLinks.map((nav, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={nav.path} className="nav-link">
                                        {nav.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* logo */}
                <img src={exact ? logoComply[0].image : logoComply[1].image} className="nav-logo" alt="logo" />
                {/* cart icon */}
                <div className="toggle-container">
                    <button
                        className="toggle-cart"
                        onClick={() => {
                            dispatch(cartSlice.actions.displayCart());
                        }}
                    >
                        <i className="fas fa-shopping-cart" />
                    </button>
                    <span className="cart-item-count">{totalQuantity()}</span>
                </div>
            </div>
        </nav>
    );
}
