import {ADD_DAY, ADD_MONTH} from "../constants";


export const saveClickedMonth = (month) => {
  return {
    type: ADD_MONTH,
    payload: month
  }
};

export const saveClickedDay = (day) => {
  return {
    type: ADD_DAY,
    payload: day
  }
};
