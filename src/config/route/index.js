import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
import NotFoundPage from "pages/NotFoundPage";
import ProductAction from "components/Product/ProductAction";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product',
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: '/product/add',
        exact: true,
        main: ({ history }) => <ProductAction history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: true,
        main: ({ history, match }) => <ProductAction history={history} match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
]

export default routes;