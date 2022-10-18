import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {distinctUntilChanged, map, startWith} from "rxjs";
import {FormState} from "../../../shared/models/form-state";
import {identityRevealedValidator, passwordMatchValidator} from "../validators/validate-value-match";
import {IUserInfoForm} from "../../../shared/models/user-info-form.model";


@Injectable()
export class UserInfoForm implements IUserInfoForm {
  private _lastName: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  private _firstName: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  private _email: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });
  private _phoneNumber: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  private _password: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(6)]
  });
  private _passwordAgain: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
    updateOn: "submit"
  });

  private _form = new FormGroup<IUserInfoForm>(
    {
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
      passwordAgain: this.passwordAgain,

    }, {
      updateOn: "submit",
    }
  )

  constructor() {
  }

  isValid = this.form.statusChanges.pipe(
    startWith(this.form.status),
    distinctUntilChanged(),
    map((status: string) => status === FormState.VALID)
  )

  isInValid = this.form.statusChanges.pipe(
    startWith(this.form.status),
    distinctUntilChanged(),
    map((status: string) => status === FormState.INVALID)
  )

  get lastName(): FormControl<string> {
    return this._lastName;
  }

  get firstName(): FormControl<string> {
    return this._firstName;
  }

  get email(): FormControl<string> {
    return this._email;
  }

  get phoneNumber(): FormControl<string> {
    return this._phoneNumber;
  }

  get password(): FormControl<string> {
    return this._password;
  }

  get passwordAgain(): FormControl<string> {
    return this._passwordAgain;
  }

  get form(): FormGroup<IUserInfoForm> {
    return this._form;
  }
}
