import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean | UrlTree {
    return this.doesUserExist();
  }

  canLoad(): boolean | UrlTree {
    return this.doesUserExist();
  }

  private doesUserExist(): boolean | UrlTree {
    const isExist = !!this.userService.getUserName();
    return isExist || this.router.parseUrl('/login');
  }
}
