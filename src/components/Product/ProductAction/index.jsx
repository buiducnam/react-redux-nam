import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductAction.scss';
import productApi from 'config/api/productApi';
import { useHistory } from 'react-router-dom';

ProductAction.propTypes = {

};

function ProductAction(props) {
    const [value, setValue] = useState({
        title: '',
        price: '',
        status: false,
    });

    const { history, match } = props;

    useEffect(() => {
        const getFetchProductid = async () => {
            if (match) {
                const id = match.params.id;
                const response = await productApi.getProductId(id);
                setValue(response.data);
            }
        }
        getFetchProductid();
    }, []);

    const onChangeValue = (e) => {
        const valueForm = { ...value };
        valueForm[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setValue(valueForm);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formValue = {
            title: value.title,
            price: parseInt(value.price),
            status: value.status
        }
        if (match) {
            const id = match.params.id;
            await productApi.putProduct(formValue, id);
            history.goBack();
        } else {
            await productApi.postProduct(formValue);
            history.goBack();
        }
    }

    return (
        <div className="product__action">
            <h1 className="product__action--add">{match ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h1>
            <form className="product__action--form" onSubmit={onSubmit}>
                <div className="form__field">
                    <label className="title">Tên sản phẩm</label>
                    <input
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Name: ..."
                        value={value.title}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="form__field">
                    <label className="title">Đơn giá</label>
                    <input
                        className="input"
                        type="text"
                        name="price"
                        placeholder="Price: ...."
                        value={value.price}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="form__field" >
                    <label>
                        <input
                            type="checkbox"
                            name="status"
                            checked={value.status}
                            onChange={onChangeValue}
                        />
                        Trạng thái
                    </label>
                </div>
                <button type="submit" className="btn__add">{match ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}

export default ProductAction;