import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
    let myStr = window.location.pathname;
    let myArr = myStr.split("/");
    const renderBreadcrumb = () => {
        if (props.detailProduct) {
            return <h3 className="page-hero-title"><Link to="/products" style={{color: "#617d98"}}>Products</Link> / <span style={{ color: "#ba5d2c" }}>{props.detailProduct.fields.name}</span></h3>
        } else {
            return <h3 className="page-hero-title"><Link to="/" style={{color: "#617d98"}}>Comfy</Link> / <span style={{ color: "#ba5d2c" }}>{myArr}</span></h3>
        }
    }

    return (
        <section className="page-hero">
            <div className="section-center">
                {renderBreadcrumb()}
                {/* <h3 className="page-hero-title">Comfy / <span style={{ color: "#ba5d2c" }}>{myArr}</span></h3> */}
            </div>
        </section>
    )
}
