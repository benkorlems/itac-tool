import { searchResult, searching } from "./searchActions";
import searchUserApi from "../mockApi/mockSearchApi";
import { GET_ERRORS } from "./types";

// Login - Get User Token
export const searchUser = searchData => dispatch => {
  dispatch(searching(true));
  searchUserApi
    .getUser(searchData)
    .then(res => {
      // Send result
      dispatch(searchResult(res));
      // Stop authentication
      dispatch(searching(false));
    })
    .catch(err =>
      // Search error
      {
        dispatch(searching(false));
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
      }
    );
};
