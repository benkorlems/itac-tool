//import setAuthToken from "../utils/setAuthToken";
//import jwt_decode from "jwt-decode";

import { GET_ERRORS, SEARCH_RESULT, SEARCHING } from "./types";
// Set logged in user
export const searchResult = result => {
  return {
    type: SEARCH_RESULT,
    payload: result
  };
};

export const getErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

export const searching = status => {
  return {
    type: SEARCHING,
    payload: status
  };
};
