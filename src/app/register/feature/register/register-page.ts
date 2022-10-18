import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {registrationFormProvider} from "../../shared/forms/registration-form.provider";
import {IRegistrationForm} from "../../../shared/models/registration-form.model";
import {OptInForm} from "../../shared/forms/opt-in-form";
import {UserInfoForm} from "../../shared/forms/user-info-form";

@Component({
  selector: 'app-login-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss'],
  providers: [...registrationFormProvider]
})
export class RegisterPage implements OnInit {

  constructor(public formGroups: FormGroup<IRegistrationForm>, private optIn: OptInForm, private userInfoForm: UserInfoForm) {
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.formGroups.markAllAsTouched();
    this.formGroups.updateValueAndValidity();
    if (this.userInfoForm.password.value !== this.userInfoForm.passwordAgain.value) {
      this.userInfoForm.passwordAgain.setErrors({passwordMisMatch: {value: true}})
    } else {
      this.userInfoForm.passwordAgain.setErrors(null);
    }
  }
}
