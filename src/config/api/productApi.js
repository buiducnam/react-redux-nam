import axiosClient from "./axiosClient";

const productApi = {
    getProduct: (params) => {
        const url = "/product";
        return axiosClient.get(url, { params });
    },

    getProductId: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },

    postProduct: (data) => {
        const url = "/product";
        return axiosClient.post(url, data);
    },

    putProduct: (data, id) => {
        const url = `/product/${id}`;
        return axiosClient.put(url, data);

    },

    deleteProduct: (id) => {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    }
}

export default productApi;

