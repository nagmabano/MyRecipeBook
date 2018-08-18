import { HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

        return next.handle(req).pipe(tap(
            event=>{
                console.log('Logging Interceptor', event);
            }
        ))

    }
}