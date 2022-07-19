import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Filters from './products/fillter';
import ProductList from './products/ProductList';

export default function ProductPage() {
    return (
        <>
            <Breadcrumb />
            <section className="products">
                {/* filters */}
                <Filters />
                {/* products */}
                <ProductList />
            </section>
        </>
    );
}
