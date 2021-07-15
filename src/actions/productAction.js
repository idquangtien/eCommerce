import * as types from '../constants/ActionTypes';

export const getProductList = () => async (dispatch, getState) => {
    let list = getState().products.list || [];

    if(localStorage.getItem("products")) {
        list = JSON.parse(localStorage.getItem("products"));
    } 
    return dispatch({
        type: types.GET_PRODUCT_LIST,
        payload: list
    })
}
export const getProductItem = (id) => async (dispatch, getState) =>{
    const list = await getState().products.list; 
    const item = list.length >  0 ? list.find(i => i.id === id.toString()) : {};
    return dispatch({
        type: types.GET_PRODUCT_ITEM,
        payload: item
    });
}

export const addProduct = (item) => {
    return {
        type: types.ADD_PRODUCT,
        payload: item
    }
}
export const updateProduct = (item) => {
    return {
        type: types.UPDATE_PRODUCT,
        payload: item
    }
}