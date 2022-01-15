import React, { memo } from "react";
import { addPerson, removePerson } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const People = () => {
  const number = useSelector((state) => state.peopleReducer.numberOfPeople);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addPerson());
  };
  const decrement = () => {
    dispatch(removePerson());
  };

  return (
    <div>
      <h3>Number Of People is : {number}</h3>
      <h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </h3>
    </div>
  );
};

export default People;
