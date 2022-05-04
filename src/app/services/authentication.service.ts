import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
// import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { BehaviorSubject, from } from 'rxjs';
// import { AppModule } from '../app.module';
// import { authdata } from 'firebase/app';
// import {User} from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // authState: any = null
  currentUser = authState(this.auth);
  private loggedIn = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<boolean>(false);

  get User() {
    return this.user.asObservable();
  }

  constructor(private auth: Auth) { }
  login(user: any) {
    const auth = getAuth();
    // debugger
    return from(signInWithEmailAndPassword(auth, user.username, user.password));
    // return from(signInWithEmailAndPassword(user.username,user.password));


  }
  // get isLogin() {
  //   return this.logIn.asObservable();
  // }
  logout() {
    return from(this.auth.signOut())

  }
}
