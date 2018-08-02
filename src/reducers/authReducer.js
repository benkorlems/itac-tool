import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, AUTHENTICATING, GET_ERRORS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  authenticating: false,
  user: {},
  errors: null
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        authenticating: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
