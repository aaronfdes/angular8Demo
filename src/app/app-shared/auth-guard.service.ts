import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = sessionStorage.getItem('AUTH_TOKEN');
    if (authToken) {
      return true;
    } else {
      // return url is just a random key which is used in the login component
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } }); 
    }
  }
}
