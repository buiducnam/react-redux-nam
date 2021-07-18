import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.scss';

ProductList.propTypes = {
    children: PropTypes.array,
};
ProductList.defaultProps = {
    children: [],
};

function ProductList(props) {
    const { children } = props;
    return (
        <table className="product__list">
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default ProductList;