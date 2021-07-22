import * as types from "../constants/ActionTypes";

export const setCart = (carts) => {
  return {
    type: types.SET_CART,
    payload: carts,
  };
};
