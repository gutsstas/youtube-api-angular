import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  key = 'youtubeKeyLogIn';

  userName = '';

  private statusBtn = new BehaviorSubject<boolean>(
    localStorage.getItem(this.key) ? true : false,
  );

  currentStatus = this.statusBtn.asObservable();

  setStatus(value: boolean) {
    this.statusBtn.next(value);
  }

  logIn(login: string) {
    localStorage.setItem(this.key, `${login}`);
    this.userName = login;
    this.setStatus(true);
  }

  logOut() {
    localStorage.removeItem(this.key);
    this.userName = '';
    this.setStatus(false);
  }

  getUserName() {
    this.userName = localStorage.getItem(this.key) || '';
    return this.userName;
  }
}
