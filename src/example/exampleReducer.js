import * as types from "../constants/ActionTypes";

const initialState = {
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
  f: "",
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_EXAMPLE_DATA:
      const { key, value } = action.payload;
      state[key] = value;
      return state;
    case types.SUBMIT_EXAMPLE_DATA:
      return state;
    default:
      return state;
  }
};

export default exampleReducer;
