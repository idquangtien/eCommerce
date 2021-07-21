import * as types from '../constants/ActionTypes';

const initialState = {
    list: [],
    item: {},
    id: null,
    inputSearch: '',
    loading: false,
    filterByType: "",
    sort: {},
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
            const { id, name, sku, type, price, desc } = action.payload;
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
        case types.DELETE_PRODUCT: 
            const listDelete = state.list;
            const idDelete = action.payload;
            const dataDelete = listDelete.filter(i => (i.id).toString() !== idDelete.toString());
            return {
                ...state,
                list: dataDelete
            };
        case types.SEARCH_PRODUCT_BY_NAME:
            return {
                ...state,
                inputSearch: action.payload
            }
        case types.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case types.FILTER_BY_TYPE:
            return {
                ...state,
                filterByType: action.payload
            }
        case types.SORT_PRODUCT:
            return {
                ...state,
                sort: action.payload
            }
        
        default: 
            return state;
    }
}

export default productReducer;