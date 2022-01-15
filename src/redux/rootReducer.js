import { combineReducers } from "redux";
import peopleReducer from "./people/reducer";

const rootReducer = combineReducers({
  peopleReducer,
});

export default rootReducer;
