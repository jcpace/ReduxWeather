import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //return state.concat([ action.payload.data ]); same as below
    return [ action.payload.data, ...state];
    // create a new array and insert all entries in the variable state inside that array. action.payload goes in front off arr
  }
  // never mutate state directly. always return a new instance of state

  return state;
}