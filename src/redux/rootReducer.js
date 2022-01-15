import { combineReducers } from "redux";
import peopleReducer from "./people/reducer";
import numAddReducer from "./numAdd/reducer";

const rootReducer = combineReducers({
  peopleReducer,
  numAddReducer,
});

export default rootReducer;
