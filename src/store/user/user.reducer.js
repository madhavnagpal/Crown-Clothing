/*All our reducers reacts to every action, since redux
  is singular store approach (single source of truth) */

import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, currentUser: null, error: payload };
    default:
      return state;
  }
};

export default userReducer;
