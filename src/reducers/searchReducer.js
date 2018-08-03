import isEmpty from "../validation/is-empty";

import { GET_ERRORS, SEARCHING, SEARCH_RESULT } from "../actions/types";

const initialState = {
  searching: false,
  searchResult: "",
  errors: ""
};
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        searching: action.payload
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload
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
