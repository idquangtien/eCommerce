import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import loadingReducer from "./loadingReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  products: productReducer,
  carts: cartReducer,
  loading: loadingReducer,
});

export default reducers;
