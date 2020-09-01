import streams from "../api/streams";
import { SIGN_IN, SIGN_OUT, LIST_STREAMS, GET_STREAM } from "./types";

export const signIn = (userId, name, email, jwt) => {
  return ({
    type: SIGN_IN,
    payload: {
      userId: userId,
      name: name,
      email: email,
      jwt: jwt
    }
  });
};

export const signOut = () => {
  return ({
    type: SIGN_OUT,
    payload: {
      userId: null,
      name: '',
      email: '',
      jwt: ''
    }
  });
}

export const listStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({type: LIST_STREAMS, payload: response.data});
}
export const getStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({type: GET_STREAM, payload: response.data });
}

