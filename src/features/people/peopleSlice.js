import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "peopleeeeeeee",
  initialState: {
    value: 0,
  },
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
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const selectPeople = (state) => state.people.value;

export default slice.reducer;
