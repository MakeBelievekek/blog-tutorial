import {createReducer, on} from "@ngrx/store";
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess
} from "./login.actions";
import {IUser} from "../../../shared/models/user.model";

export const initialState: { userInfo: IUser | null, isLoggedIn: boolean, isLoading: boolean } = {
  userInfo: {} as unknown as IUser,
  isLoggedIn: false,
  isLoading: false,
};

export const loginReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading user
  on(loginUser, (state) => ({...state, isLoading: true})),
  // Handle successfully loading user
  on(loginUserSuccess, (state, {user}) => ({
    ...state,
    userInfo: {...user},
    isLoggedIn: true,
    isLoading: false
  })),
  // Handle error loading user
  on(loginUserFailure, (state, {error}) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false
  })),
  on(registerUser, (state) => ({...state, isLoading: true})),
  // Handle successfully loading user
  on(registerUserSuccess, (state, {user}) => ({
    ...state,
    userInfo: {...user},
    isLoggedIn: true,
    isLoading: false
  })),
  // Handle error loading user
  on(registerUserFailure, (state, {error}) => ({
    ...state,
    isLoggedIn: true,
    isLoading: false
  }))
);
