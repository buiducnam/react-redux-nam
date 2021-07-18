import * as Types from "constants/ActionTypes";

const initValue = {
    list: []
};

const productReducer = (state = initValue, action) => {
    // console.log(action);
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            // const newList = [...state.list, action.payload]
            return {
                ...state,
                list: action.payload
            }

        case Types.ADD_PRODUCT:
            return state;

        case Types.UPDATE_PRODUCT:
            return state;

        case Types.DELETE_PRODUCT:
            return state;

        default:
            return state;
    }
}

export default productReducer;