import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseNum } from "../redux";

const AddingNumber = () => {
  const [conum, setConum] = useState("");
  const number = useSelector((state) => state.numAddReducer.fnum);
  const dispatch = useDispatch();

  const numincrement = (num) => {
    dispatch(increaseNum(num));
    setConum("");
  };
  return (
    <div>
      <h3>Number:{number}</h3>
      <input
        type="text"
        value={conum}
        onChange={(e) => {
          setConum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          numincrement(conum);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddingNumber;
