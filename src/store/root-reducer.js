/*All our reducers reacts to every action, since redux
  is singular store approach (single source of truth) */

/*
  Whenever any action fires and as long as reducer updates, it does not
  matter which part of the reducer your Component is listening to,
  every useSelector re-run (and whether it triggers a re-render in our component is upto how we code out the structure)
*/

import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
