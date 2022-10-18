import {FormGroup} from "@angular/forms";
import {OptInForm} from "./opt-in-form";
import {UserInfoForm} from "./user-info-form";
import {IRegistrationForm} from "../../../shared/models/registration-form.model";

export const registrationFormProvider = [
  UserInfoForm,
  OptInForm,
  {
  provide: (FormGroup<IRegistrationForm>),
  deps: [OptInForm, UserInfoForm],
  useFactory: (optIn: OptInForm, userInfo: UserInfoForm):FormGroup<IRegistrationForm>  => (new FormGroup({
    userInfo: userInfo.form,
    optIn: optIn.form
  }))
}]
