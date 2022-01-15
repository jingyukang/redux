import { ADD_PERSON, REMOVE_PERSON } from "./types";

export const addPerson = () => {
  return {
    type: ADD_PERSON,
  };
};

export const removePerson = () => {
  return {
    type: REMOVE_PERSON,
  };
};
