import {IAppState} from "../../../shared/models/app-state.model";
import {createSelector} from "@ngrx/store";

export const selectUser = (state: IAppState) => state.user;

export const selectLoginLoading = createSelector(
  selectUser,
  (user) => user.isLoading
);

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.isLoggedIn
);

export const selectUserInfo = createSelector(
  selectUser,
  (user) => user.userInfo
);
