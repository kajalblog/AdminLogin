import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
// import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
// import { AppModule } from '../app.module';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // authState: any = null

  constructor(private auth: Auth) { }
  login(user: any) {
    // debugger
    return from(signInWithEmailAndPassword(this.auth, user.username, user.password));
    // return from(signInWithEmailAndPassword(user.username,user.password));


  }
  logout() {
    return from(this.auth.signOut())

  }
}
