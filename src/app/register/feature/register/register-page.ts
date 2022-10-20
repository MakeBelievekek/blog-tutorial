import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {registrationFormProvider} from "../../shared/forms/registration-form.provider";
import {IRegistrationForm} from "../../../shared/models/registration-form.model";
import {OptInForm} from "../../shared/forms/opt-in-form";
import {UserInfoForm} from "../../shared/forms/user-info-form";
import {AbstractRegistrationService} from "../../data-acess/abstraction/abstract-registration.service";
import {IAppState} from "../../../shared/models/app-state.model";
import {Store} from "@ngrx/store";
import {registerUser, registerUserSuccess} from "../../../login/data-acess/store/login.actions";
import {Actions, ofType} from "@ngrx/effects";
import {switchMap, take, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss'],
  providers: [...registrationFormProvider]
})
export class RegisterPage {
  onSuccess$ = this.actions$.pipe(
    ofType(registerUserSuccess),
    take(1),
    ofType(registerUserSuccess),
    switchMap(_ => this.router.navigate(['../home']))
  ).subscribe();


  constructor(private router: Router, private actions$: Actions, private store: Store<IAppState>, private registrationService: AbstractRegistrationService, public formGroups: FormGroup<IRegistrationForm>, private optIn: OptInForm, private userInfoForm: UserInfoForm) {
  }

  onRegister(): void {
    this.formGroups.markAllAsTouched();
    this.formGroups.updateValueAndValidity();
    if (this.userInfoForm.password.value !== this.userInfoForm.passwordAgain.value) {
      this.userInfoForm.passwordAgain.setErrors({passwordMisMatch: {value: true}})
    } else {
      this.userInfoForm.passwordAgain.setErrors(null);
    }

    if (this.formGroups.invalid) {
      return;
    }

    this.store.dispatch(registerUser({req: {...this.formGroups.getRawValue()}}))
  }
}
