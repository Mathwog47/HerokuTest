import { panelData } from "../actionType/actionType";

export const tokenHandler = (data) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: panelData.tokenData,
      payload: data,
    });
  });
};