import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  selectCount,
  hahahaha,
  shahahaha,
} from "./counterSlice";
// import store from "../../app/store";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const count = useSelector(selectCount);
  const counte = useSelector(hahahaha);
  const countee = useSelector((state) =>
    shahahaha(state, incrementByAmount(Number(incrementAmount) || 0))
  );
  const dispatch = useDispatch();
  // const hahahaha = useSelector((state) => state.counter.value);

  const stated = useSelector((state) => state);
  // console.log(state);

  // const counted = selectCount(store.getState());
  // console.log(counted);

  // const countPlusTwo = useSelector((state) => state.counter.value + 2);
  // console.log(countPlusTwo);

  console.log(stated);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              dispatch(incrementByAmount(Number(incrementAmount) || 0));
            }}
          >
            Add Amount
          </button>
          <button
            onClick={() =>
              dispatch(decrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Min Amount
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(incrementAsync(Number(incrementAmount) || 0));
          }}
        >
          Add Async
        </button>
        <button
          onClick={() => {
            console.log(counte);
            // console.log(state);
          }}
        >
          hahahaha
        </button>
        <button
          onClick={() => {
            console.log(countee);
            // console.log(state);
          }}
        >
          shahahaha
        </button>
      </div>
    </div>
  );
};

export default Counter;
