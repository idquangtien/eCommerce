import * as types from '../constants/ActionTypes';

const initialState = {
    list: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_CART:
            return {
                ...state,
                list: action.payload
            }
        default: 
            return state;
    }
}

export default cartReducer;