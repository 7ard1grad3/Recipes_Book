import { AuthService } from './auth.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._authService.isAuthenticated();
  }

}
