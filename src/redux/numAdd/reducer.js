import { NUMADD } from "./types";

const initialState = {
  fnum: 0,
};

const numAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMADD:
      return {
        ...state,
        fnum: state.fnum + action.payload,
      };
    default:
      return state;
  }
};

export default numAddReducer;
