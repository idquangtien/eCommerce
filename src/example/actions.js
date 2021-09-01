import * as types from "../constants/ActionTypes";

export const updateExampleData = (key, value) => {
  return {
    type: types.UPDATE_EXAMPLE_DATA,
    payload: { key, value },
  };
};

export const submitExample = () => async (dispatch, getState) => {
  const exampleData = getState().example;
  console.log({ exampleData });
  //handler submit on here
  dispatch({
    type: types.SUBMIT_EXAMPLE_DATA,
  });
};
