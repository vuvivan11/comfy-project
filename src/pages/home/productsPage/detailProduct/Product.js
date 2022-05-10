import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../../../../store/cartSlice";
import { formatPrice } from "../../../../utils";
import { Link } from "react-router-dom";
import productListSlice from "../../../../store/productListSlice";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


export default function Product(props) {
  const { detailProduct, relatedProduct } = props;
  const eleDetail = useRef(null)
  const dispatch = useDispatch();

  const renderColor = (colors) => {
    return colors.map((color, index) => {
      return (
        <span
          key={index}
          className="product-color"
          style={{ backgroundColor: `${color}` }}
        />
      );
    });
  };

  const handleAddCart = (product) => {
    const productCart = {
      id: product.id,
      fields: product.fields,
      amount: 1,
    };
    dispatch(cartSlice.actions.addCartItem(productCart));
    dispatch(cartSlice.actions.displayCart());
  };

  const renderRelatedProduct = (relatedProduct) => {
    return relatedProduct.map((product, index) => {
      const { price, name, image } = product.fields;
      return (
        <SwiperSlide className="ct-swiper-slide" key={index}>
          <article key={price} className="product">
            <div className="product-container">
              <img
                src={`${image[0].thumbnails.large.url}`}
                className="product-img img"
                alt={`${image[0].filename}`}
              />
              <div className="product-icons">
                <Link
                  to={`${product.id}`}
                  className="product-icon"
                  onClick={() => {
                    dispatch(
                      productListSlice.actions.getRelatedProduct(
                        product.fields.company
                      )
                    );
                  }}
                >
                  <i className="fas fa-search" />
                </Link>
                <button
                  className="product-cart-btn product-icon"
                  onClick={() => {
                    handleAddCart(product);
                  }}
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">{name}</p>
              <h4 className="product-price">{formatPrice(price)}</h4>
            </footer>
          </article>
        </SwiperSlide>
      );
    });
  };

  if (detailProduct && relatedProduct) {
    const { price, name, image, company, colors } = detailProduct.fields;
    return (
      <>
        <section ref={eleDetail}  className="single-product">
          <div className="section-center single-product-center">
            <img
              src={`${image[0].thumbnails.large.url}`}
              className="single-product-img img"
              alt={`${image[0].filename}`}
            />
            <article className="single-product-info">
              <div>
                <h2 className="single-product-title">{name}</h2>
                <p className="single-product-company text-slanted">{company}</p>
                <p className="single-product-price">{formatPrice(price)}</p>
                <div className="single-product-colors">
                  {renderColor(colors)}
                </div>
                <p className="single-product-desc">
                  Cloud bread VHS hell of banjo bicycle rights jianbing umami
                  mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                  dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                  typewriter fingerstache pinterest pork belly narwhal. Schlitz
                  venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                  trust fund hashtag kinfolk microdosing gochujang live-edge
                </p>
                <button
                  className="addToCartBtn btn"
                  onClick={() => {
                    handleAddCart(detailProduct);
                  }}
                >
                  add to cart
                </button>
              </div>
            </article>
          </div>
        </section>
        <section>
          <div className="section-swiper">
            <h3 style={{ textAlign: "center" }}>Related Product</h3>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="ct-swiper"
            >
              {renderRelatedProduct(relatedProduct)}
            </Swiper>
          </div>
        </section>
      </>
    );
  }
}
