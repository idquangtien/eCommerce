import * as types from '../constants/ActionTypes';
import Api from '../constants/Api';

const rootpath = "products";

export const getProductList = () => async (dispatch, getState) => {
    // let list = getState().products.list || [];
    // if(localStorage.getItem("products")) {
    //     list = JSON.parse(localStorage.getItem("products"));
    // } 

    const response = await Api.get(rootpath);
    const list = response.data || [];

    return dispatch({
        type: types.GET_PRODUCT_LIST,
        payload: list
    })
}
export const getProductItem = (id) => async (dispatch, getState) =>{
    // const list = await getState().products.list; 
    // const item = list.length >  0 ? list.find(i => i.id === id.toString()) : {};
    const response = await Api.get(`${rootpath}/${id}`);
    let item = response.data || {};
    return dispatch({
        type: types.GET_PRODUCT_ITEM,
        payload: item
    });
}

export const addProduct = (item) => async (dispatch, getState) => {
    dispatch({
        type: types.LOADING,
        payload: true,
    })
    const response = await Api.post(rootpath, item);
    dispatch({
        type: types.LOADING,
        payload: false,
    })
    if(response.status === 201) {
        return dispatch({
            type: types.ADD_PRODUCT,
            payload: item,
            
        });
    }
}
export const updateProduct = (item) => async (dispatch, getState) => {
    const response = await Api.put(`${rootpath}/${item.id}`, item);
    if(response.status === 200) {
        return dispatch({
            type: types.UPDATE_PRODUCT,
            payload: item
        });
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    const response = await Api.delete(`${rootpath}/${id}`);
    if(response.status === 200){
        return dispatch({
            type: types.DELETE_PRODUCT,
            payload: id
        });
    }
}

export const searchProduct = (name) => {
    return {
        type: types.SEARCH_PRODUCT_BY_NAME,
        payload: name
    }
}