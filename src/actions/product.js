import * as Types from 'constants/ActionTypes';

export const fetchProduct = (product) => {
    return {
        type: Types.FETCH_PRODUCT,
        payload: product
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        payload: product
    }
}

export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: Types.DELETE_PRODUCT,
        payload: product
    }
}