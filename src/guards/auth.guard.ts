import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {StorageService} from '../services/storage.service';
@Injectable(
  {providedIn: 'root'}
)
export class AuthGuard implements CanActivate {

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.storageService.getToken();
    if (token === null) {

      this.router.navigate(['/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }
    return true;
  }
}
