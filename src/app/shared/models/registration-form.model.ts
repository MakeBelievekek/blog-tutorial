import {FormGroup} from "@angular/forms";
import {IUserInfoForm} from "./user-info-form.model";
import {IOptInForm} from "./opt-in-form.model";

export interface IRegistrationForm {
  userInfo: FormGroup<IUserInfoForm>;
  optIn: FormGroup<IOptInForm>
}
