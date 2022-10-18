import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {distinctUntilChanged, map, startWith} from "rxjs";
import {AbstractAuthenticationService} from "../../../shared/data-acess/abstraction/abstract-authentication-service";
import {FormState} from "../../../shared/models/form-state";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage {
  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      updateOn: "blur",
    }
  )


  constructor(private fb: FormBuilder, private authService: AbstractAuthenticationService) {
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
  }
}
