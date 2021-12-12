import { Subject } from "rxjs";

export class SharedService {
    emitData = new Subject<any>();
}