import { createSlice } from "@reduxjs/toolkit";

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };
const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  slice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export const selectCount = (state) => state.counter.value;

console.log(slice.actions.increment());

const newState = slice.reducer({ value: 10 }, slice.actions.increment());
console.log(newState);

export const hahahaha = (state, action) => {
  return {
    ...state,
    counter: {
      ...state.counter,
      svalue: 5,
    },
  };
};

export const shahahaha = (state, action) => {
  return {
    ...state,
    counter: {
      ...state.counter,
      value: action.payload,
    },
  };
};

export default slice.reducer;
