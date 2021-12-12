import { Subject } from "rxjs";

export class LoginService {
    loginInfo = new Subject<any>();
}