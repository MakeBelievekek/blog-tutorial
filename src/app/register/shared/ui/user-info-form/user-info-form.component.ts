import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective} from "@angular/forms";
import {UserInfoForm} from "../../forms/user-info-form";

interface IRegisterForm {
  lastName: FormControl<string>;
  firstName: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  password: FormControl<string>;
  passwordAgain: FormControl<string>;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss'],
})
export class UserInfoFormComponent implements OnInit {

  constructor(public form: UserInfoForm) {
  }

  ngOnInit(): void {
  }
}
