import { NUMADD } from "./types";

export const increaseNum = (num) => {
  return {
    type: NUMADD,
    payload: Number(num),
  };
};
