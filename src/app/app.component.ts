import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material-Demo';
  isLoggedIn: boolean = false;
  today = Date();
  constructor(public authservice: AuthenticationService, private router: Router) {
  }
  ngOnInit(): void {
    this.authservice.user.subscribe(res => {
      // debugger
      if (res) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    })
  }
  logout() {
    this.authservice.logout().subscribe(() => {
      this.router.navigate([''])
    })
  }


  users = {
    name: "kajal",
    age: 25
  }
}
