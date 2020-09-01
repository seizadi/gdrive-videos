import { LIST_TALKS, GET_TALK } from "../actions/types";

const INITIAL_STATE = {}

export default  (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case GET_TALK:
      return { ...state, [action.payload.id]: action.payload };

    case LIST_TALKS:
      let newState = {};
      action.payload.forEach((talk) => {
        talk.show = true;
        newState = { ...newState, [talk.id]: talk }
      });
      return newState;
    default:
      return state;
  }
};
