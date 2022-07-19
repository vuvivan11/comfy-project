import Home from '../pages/home';
import AboutPage from '../pages/home/AboutPage';
import HomePage from '../pages/home/homePage';
import ProductPage from '../pages/home/productsPage';
import DetailProduct from '../pages/home/productsPage/detailProduct';

const routesHome = [
    {
        exact: true,
        path: '/',
        component: HomePage,
    },
    {
        exact: false,
        path: '/products',
        component: ProductPage,
    },
    {
        exact: false,
        path: '/about',
        component: AboutPage,
    },
    {
        exact: false,
        path: '/product/:id',
        component: DetailProduct,
    },
];

export const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <Home key={index} exact={route.exact} path={route.path} component={route.component} />;
    });
};
