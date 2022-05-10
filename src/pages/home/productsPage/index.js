import React from 'react';
import CartOverLay from '../../../components/cartOverlay';
import SidebarOverlay from '../../../components/sidebarOverlay';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Products from "./products/Products";

export default function ProductPage() {
    return (
        <>
            <Breadcrumb />
            <SidebarOverlay />
            <CartOverLay />
            <Products />
        </>
    )
}