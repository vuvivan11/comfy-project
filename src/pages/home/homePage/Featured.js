import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartSlice from '../../../store/cartSlice';
import productListSlice from '../../../store/productListSlice';
import { formatPrice } from '../../../utils';


export default function Featured() {
  const { productList } = useSelector(state => state.productList);
  const [featured, setFeatured] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const producFeatured = [];
    productList.map((product) => {
      if (product.fields.featured) {
        producFeatured.push(product)
      }
    })
    setFeatured(producFeatured)
  }, [productList])

  const handleAddCart = (product) => {
    const productCart = {
      id: product.id,
      fields: product.fields,
      amount: 1
    }
    dispatch(cartSlice.actions.addCartItem(productCart))
    dispatch(cartSlice.actions.displayCart())
  }

  const renderProductFeatured = () => {
    return featured.map((product, index) => {
      const { price, name, image } = product.fields;
      return (
        <article key={index} className="product">
          <div className="product-container">
            <img src={`${image[0].thumbnails.large.url}`} className="product-img img" alt={`${image[0].filename}`} />
            <div className="product-icons">
              <Link to={`product/${product.id}`} className="product-icon" onClick={() => {
                dispatch(productListSlice.actions.getRelatedProduct(product.fields.company))
              }}>
                <i className="fas fa-search" />
              </Link>
              <button className="product-cart-btn product-icon" onClick={() => { handleAddCart(product) }}>
                <i className="fas fa-shopping-cart" />
              </button>
            </div>
          </div>
          <footer>
            <p className="product-name">{name}</p>
            <h4 className="product-price">{formatPrice(price)}</h4>
          </footer>
        </article>
      )
    })
  }

  return (
    <section className="section featured">
      <div className="title">
        <h2><span>/</span> featured</h2>
      </div>
      <div className="featured-center section-center">
        {renderProductFeatured()}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  )
}
