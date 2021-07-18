import React, { useCallback, useEffect, useState } from 'react';
import './ProductPage.scss';
import ProductList from 'components/Product/ProductList';
import ProductItem from 'components/Product/ProductItem';
import productApi from 'config/api/productApi';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProduct } from 'actions/product';
import store from 'store';

function ProductPage() {
    // const [products, setProduct] = useState([]);
    const products = useSelector(state => state.product.list);
    // console.log(products);
    // const dispatch = useDispatch();
    const [didMoproductsunt, setDidMount] = useState(false);
    useEffect(() => {
        setDidMount(true);
        const getFetchProduct = async () => {
            const response = await productApi.getProduct();
            // console.log(response.data);
            store.dispatch(fetchProduct(response.data));
        }
        getFetchProduct();


        return () => {
            setDidMount(false);
        }
    }, [])

    const onHandleDelete = async (product) => {
        await productApi.deleteProduct(product.id);

        // const index = products.findIndex(x => x.id === product.id);
        // const newProducts = [...products];
        // newProducts.splice(index, 1);
        // dispatch(deleteProduct(newProducts));

    }

    return (
        < div className="home" >
            <Link className="btn__add--product" to='/product/add'><FontAwesomeIcon className="icon__plus" icon={faPlus} color="black" />Thêm sản phẩm</Link>
            <ProductList>
                {
                    products.map((product, index) =>
                        < ProductItem key={index} product={product} index={index} onDelete={onHandleDelete} />
                    )
                }
            </ProductList>
        </div >
    );
}

export default ProductPage;