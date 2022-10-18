import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {distinctUntilChanged, map, startWith} from "rxjs";
import {AbstractAuthenticationService} from "../../../shared/data-acess/abstraction/abstract-authentication-service";

enum FormState {
  VALID = 'VALID',
  INVALID = 'INVALID'
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      updateOn: "blur",
    }
  )

  isValid = this.form.statusChanges.pipe(
    startWith(FormState.INVALID),
    distinctUntilChanged(),
    map((status: string) => status === FormState.VALID)
  )

  constructor(private fb: FormBuilder, private authService: AbstractAuthenticationService) {
  }

  ngOnInit(): void {
    this.isValid.subscribe(console.log)
  }

  get emailControl(): FormControl {
    return this.form.controls.email;
  }

  get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  onLogin(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

/*
    if (this.form.invalid) {
      return;
    }
*/
    this.authService.login()
    console.log(this.form.valid);
    console.log(this.form.getRawValue());
  }
}
