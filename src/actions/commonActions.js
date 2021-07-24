import * as types from "../constants/ActionTypes";

export const setLoading = async (dispatch, handler) => {
  dispatch({
    type: types.LOADING,
    payload: true,
  });
  try {
    await handler();
  } catch (err) {
  } finally {
    dispatch({
      type: types.LOADING,
      payload: false,
    });
  }
};
