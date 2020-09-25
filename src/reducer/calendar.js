import {ADD_DAY, ADD_MONTH} from "../constants";

const initialState = {
  clickedMonth: '',
  clickedDay: '',
};

export default (calendarState = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_MONTH:
      return {
        ...calendarState,
        clickedMonth: payload
      };
      case ADD_DAY:
        return {
          ...calendarState,
          clickedDay: payload
        };

    default:
      return calendarState;
  }
}
