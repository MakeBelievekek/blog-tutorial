import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../shared/models/app-state.model";
import {catchError, map, of, switchMap} from "rxjs";
import {AbstractAuthenticationService} from "../../../shared/data-acess/abstraction/abstract-authentication-service";
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess
} from "./login.actions";
import {AbstractRegistrationService} from "../../../register/data-acess/abstraction/abstract-registration.service";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private autService: AbstractAuthenticationService,
    private registrationService: AbstractRegistrationService,
  ) {
  }

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap(({req}) => this.autService.login(req).pipe(
        map(( {content: user} ) => loginUserSuccess({ user })),
        catchError((error) => of(loginUserFailure({error})))
      )),
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      switchMap(({req}) => this.registrationService.register(req).pipe(
        map(( {content: user} ) => registerUserSuccess({ user })),
        catchError((error) => of(registerUserFailure({error})))
      )),
    )
  );
}
