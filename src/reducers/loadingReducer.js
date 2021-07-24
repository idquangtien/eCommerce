import * as types from "../constants/ActionTypes";

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        isLoading: action.payload || false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
