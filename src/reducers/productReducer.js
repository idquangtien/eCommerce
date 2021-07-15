import * as types from '../constants/ActionTypes';

const initialState = {
    list: [],
    item: {},
    id: null
};
const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PRODUCT_LIST:
            return {
                ...state,
                list: action.payload
            };
        case types.GET_PRODUCT_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case types.ADD_PRODUCT:
            const listCreate = state.list;
            listCreate.push(action.payload);
            return {
                ...state,
                list: listCreate
            };
        case types.UPDATE_PRODUCT:
            const listUpdate = state.list;
            const {id, name, sku, type, price, desc} = action.payload;
            listUpdate.forEach(item => {
                if(item.id === id) {
                    item.sku = sku;
                    item.name = name;
                    item.type = type;
                    item.price = price;
                    item.desc = desc;
                }
            })
            return {
                ...state,
                list: listUpdate
            };
        default: 
            return state;
    }
}

export default productReducer;