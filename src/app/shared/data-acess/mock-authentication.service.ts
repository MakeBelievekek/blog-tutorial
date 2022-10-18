import {Injectable} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AbstractAuthenticationService} from "./abstraction/abstract-authentication-service";

@Injectable()
export class MockAuthenticationService extends AbstractAuthenticationService {

  constructor(private http: HttpClientModule) {
    super();
  }

  login(): void {
    console.log('login called');
  }

}
