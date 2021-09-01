import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import loadingReducer from "./loadingReducer";
import exampleReducer from "../example/exampleReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  products: productReducer,
  carts: cartReducer,
  loading: loadingReducer,
  example: exampleReducer,
});

export default reducers;
