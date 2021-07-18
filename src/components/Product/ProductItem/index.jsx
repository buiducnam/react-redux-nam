import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import { Link } from 'react-router-dom';

ProductItem.propTypes = {
    product: PropTypes.object,
    index: PropTypes.number,
    onDelete: PropTypes.func,
};
ProductItem.defaultProps = {
    product: {},
    index: null,
    onDelete: null,
}

function ProductItem(props) {
    const { product, index, onDelete } = props;
    const colorStyle = product.status ? "green" : "red";
    const isStatus = product.status ? "Còn hàng" : "Hết hàng";

    const onDeleteItem = (product) => {
        onDelete(product);
    }
    return (
        <tr>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
                <span style={{ backgroundColor: colorStyle, color: "white" }}>{isStatus}</span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`}>Sửa</Link>
                <button onClick={() => onDeleteItem(product)}>Xóa</button>
            </td>
        </tr >
    );
}

export default ProductItem;