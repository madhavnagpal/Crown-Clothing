/*All our reducers reacts to every action, since redux
  is singular store approach (single source of truth) */

import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
