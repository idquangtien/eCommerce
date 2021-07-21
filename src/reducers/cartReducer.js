import * as types from '../constants/ActionTypes';

const initialState = {
    carts: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CART_LOCAL:
            return {
                ...state,
                carts: action.payload
            }
        default: 
            return state;
    }
}

export default cartReducer;