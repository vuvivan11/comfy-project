import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Route } from 'react-router-dom';
import SidebarOverlay from '~/components/sidebarOverlay';
import CartOverLay from '~/components/cartOverlay';

export default function Home({ exact, path, component }) {
    return (
        <>
            <Header exact={exact} />
            <Route exact={exact} path={path} component={component}></Route>
            <SidebarOverlay />
            <CartOverLay />
            <Footer />
        </>
    );
}
