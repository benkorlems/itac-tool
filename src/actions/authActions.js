//import setAuthToken from "../utils/setAuthToken";
//import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, AUTHENTICATING } from "./types";

// Set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const getErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

export const authenticating = status => {
  return {
    type: AUTHENTICATING,
    payload: status
  };
};
