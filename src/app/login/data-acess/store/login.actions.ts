import {createAction, props} from "@ngrx/store";
import {IUser} from "../../../shared/models/user.model";
import {ILoginRequest} from "../../../shared/models/login-request.model";
import {IRegistrationRequest} from "../../../shared/models/registration-request.model";

export const loginUser = createAction(
  '[Login Page] login user',
  props<{ req: ILoginRequest }>()
);

export const loginUserSuccess = createAction(
  '[Login API] login user success',
  props<{ user: IUser }>()
);

export const loginUserFailure = createAction(
  '[Login API] login user failure',
  props<{ error: string }>()
);

export const registerUser = createAction(
  '[Registration Page] register user',
  props<{ req: IRegistrationRequest }>()
);

export const registerUserSuccess = createAction(
  '[Register API] register user success',
  props<{ user: IUser }>()
);

export const registerUserFailure = createAction(
  '[Register API] register user failure',
  props<{ error: string }>()
);
