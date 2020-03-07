import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private userService: UserService) {
  }
  canActivate() {
    if (this.userService.currentUser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  // canActivate(next: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (localStorage.getItem('currentUser')) {
  //     // logged in so return true
  //     return true;
  //   } else {
  //     // this.authService.redirectUrl = state.url
  //     this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  //     return false;
  //   }
  // }
}
