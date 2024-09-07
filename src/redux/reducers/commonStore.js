import { panelData } from "../actionType/actionType";

const initialState = {
  tokenData: '',
};
const commonReducer = (state = initialState, action) => {
  switch (action.type) {
      case panelData.tokenData:
      return {
        ...state,
        tokenData: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
