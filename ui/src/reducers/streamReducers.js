import _ from 'lodash';
import { LIST_STREAMS, GET_STREAM } from "../actions/types";

const INITIAL_STATE = {}

export default  (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case LIST_STREAMS:
      // let newState = {};
      // action.payload.forEach((stream) => {
      //   newState = { ...newState, [stream.Date]: stream }
      // });
      // return newState;
      return _.mapKeys( action.payload, 'Date');
    default:
      return state;
  }
};
