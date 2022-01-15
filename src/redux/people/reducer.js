import { ADD_PERSON, REMOVE_PERSON } from "./types";

const initialState = {
  numberOfPeople: 5,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        numberOfPeople: state.numberOfPeople + 1,
      };
    case REMOVE_PERSON:
      return {
        ...state,
        numberOfPeople: state.numberOfPeople - 1,
      };
    default:
      return state;
  }
};

export default peopleReducer;
