import { createSelector } from "reselect";

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (userSlice) => userSlice.currentUser
);

export const selectSignInError = createSelector(
  selectUserReducer,
  (userSlice) => userSlice.signInError
);

export const selectIsUserSigningIn = createSelector(
  selectUserReducer,
  (userSlice) => userSlice.isLoading
);
