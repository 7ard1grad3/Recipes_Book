import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copied_req = req.clone({params: req.params.set('auth', this._authService.getToken())}); // Get a copy of request
        console.log('Intercepted', copied_req);
        return next.handle(copied_req);
    }
}
