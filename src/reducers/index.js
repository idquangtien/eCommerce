import productReducer from './productReducer';
import cartReducer from './cartReducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    products: productReducer,
    carts: cartReducer
});

export default reducers;