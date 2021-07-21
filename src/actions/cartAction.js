import * as types from '../constants/ActionTypes';

export const getCartLocal = (carts) => {
    return {
        type: types.GET_CART_LOCAL,
        payload: carts
    }
}