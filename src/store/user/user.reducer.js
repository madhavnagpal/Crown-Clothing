/*All our reducers reacts to every action, since redux
  is singular store approach (single source of truth) */

import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  signInError: null,
  signUpError: null,
  signOutError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return { ...state, currentUser: null, signInError: null, isLoading: true };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, signInError: null, isLoading: false };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, currentUser: null, signInError: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_OUT_START:
      return { ...state, signOutError: null, isLoading: true };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, isLoading: false };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return { ...state, signOutError: payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
