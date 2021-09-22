import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivateChild() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }

  }
}