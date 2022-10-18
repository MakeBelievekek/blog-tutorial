import {Injectable} from '@angular/core';
import {AbstractAuthenticationService} from "./abstraction/abstract-authentication-service";

@Injectable()
export class MockAuthenticationService extends AbstractAuthenticationService {

  constructor() {
    super();
  }

  login(): void {
  }

}
