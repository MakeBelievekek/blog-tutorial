import {Injectable} from '@angular/core';
import {AbstractAuthenticationService} from "./abstraction/abstract-authentication-service";
import {delay, Observable, of} from "rxjs";
import {IUser} from "../models/user.model";
import {UserRole} from "../models/user-role.model";
import {ILoginRequest} from "../models/login-request.model";
import {IResponse} from "../models/response.model";

@Injectable({
    providedIn: 'root'
  }
)
export class MockAuthenticationService extends AbstractAuthenticationService {

  constructor() {
    super();
  }

  login(req: ILoginRequest): Observable<IResponse<IUser>> {
    return of({
      content: {
        id: '1000',
        firstName: 'Tamás',
        lastName: 'Példa',
        role: UserRole.USER,
        email: req.email
      }
    }).pipe(delay(1000));
  }
}
