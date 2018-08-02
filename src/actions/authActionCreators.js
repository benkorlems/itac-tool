import { setCurrentUser, authenticating } from "./authActions";
import UserApi from "../mockApi/mockUserApi";
import { GET_ERRORS } from "./types";

// Register User
/**
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};  */

// Login - Get User Token
export const loginUser = userData => dispatch => {
  dispatch(authenticating(true));
  UserApi.getUser(userData)
    .then(res => {
      // Stop authentication
      dispatch(authenticating(false));
      // Save to localStorage
      const user = res;
      // Set token to ls
      localStorage.setItem("user", user);
      // Set current user
      dispatch(setCurrentUser(user));
    })
    .catch(err =>
      // Stop authentication
      {
        dispatch(authenticating(false));
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
      }
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("user");
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
