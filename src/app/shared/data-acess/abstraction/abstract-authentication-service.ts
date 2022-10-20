import {ILoginRequest} from "../../models/login-request.model";
import {Observable} from "rxjs";
import {IUser} from "../../models/user.model";
import {IResponse} from "../../models/response.model";

export abstract class AbstractAuthenticationService {
  public abstract login(req: ILoginRequest): Observable<IResponse<IUser>>
}
