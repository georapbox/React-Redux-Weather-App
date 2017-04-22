import {FETCH_WEATHER} from '../actions';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data ? [action.payload.data, ...state] : state;
    default:
      return state;
  }
};

export default weatherReducer;
