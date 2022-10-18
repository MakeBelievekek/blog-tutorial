import {FormControl} from "@angular/forms";

export interface IUserInfoForm {
  lastName: FormControl<string>;
  firstName: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  password: FormControl<string>;
  passwordAgain: FormControl<string>;
}
