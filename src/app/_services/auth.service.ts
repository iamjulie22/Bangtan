import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: User;
  username: string;
  pfpImg: string;
  
  constructor() { }

  isLoggedIn() {

    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user) {
      if (user.token === 'jwt-token') {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getUsername() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user) {
        this.username = this.user.username;
      }
    }, 400);
  }

  getPfpImg() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user.pfpImg) {
        this.pfpImg = this.user.pfpImg;
      }
      else {
        this.pfpImg = "assets/img/pfp/basic.jpg"
      }
    }, 400);
  }

}
