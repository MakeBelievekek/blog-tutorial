import {Injectable} from '@angular/core';
import {AbstractRegistrationService} from "./abstraction/abstract-registration.service";
import {Observable, of} from "rxjs";
import {IResponse} from "../../shared/models/response.model";
import {IUser} from "../../shared/models/user.model";
import {IRegistrationRequest} from "../../shared/models/registration-request.model";
import {UserRole} from "../../shared/models/user-role.model";

@Injectable()
export class MockRegistrationService extends AbstractRegistrationService {

  constructor() {
    super();
  }

  public register({userInfo, optIn}: IRegistrationRequest): Observable<IResponse<IUser>> {
    return of({
      content: {
        lastName: userInfo.lastName,
        role: UserRole.USER,
        firstName: userInfo.firstName,
        email: userInfo.email,
        id: '1111'
      }
    });
  }
}
