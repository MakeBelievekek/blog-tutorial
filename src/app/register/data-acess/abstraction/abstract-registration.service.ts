import {Observable} from "rxjs";
import {IResponse} from "../../../shared/models/response.model";
import {IUser} from "../../../shared/models/user.model";
import {IRegistrationRequest} from "../../../shared/models/registration-request.model";

export abstract class AbstractRegistrationService {
  abstract register(req: IRegistrationRequest): Observable<IResponse<IUser>>
}
