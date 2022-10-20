import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AbstractAuthenticationService} from "../../../shared/data-acess/abstraction/abstract-authentication-service";
import {ILoginRequest} from "../../../shared/models/login-request.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../shared/models/app-state.model";
import {loginUser, loginUserSuccess} from "../../data-acess/store/login.actions";
import {Actions, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {concatMap, merge, Subject, take, takeUntil} from "rxjs";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      updateOn: "blur",
    }
  );
  navigateOnLoginSuccess$ = this.actions$.pipe(
    ofType(loginUserSuccess),
    concatMap(_ => this.router.navigate(['../home']))
  );


  constructor(private router: Router, private actions$: Actions, private store: Store<IAppState>, private fb: FormBuilder, private authService: AbstractAuthenticationService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    // for lon living subscriptions
    merge(
      this.navigateOnLoginSuccess$
    ).pipe(takeUntil(this.destroy$)).subscribe();
  }

  onLogin(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(loginUser({req: {...this.form.getRawValue()} as ILoginRequest}))
  }
}
