import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminlogin: FormGroup;
  username: string;
  password: any;
  error: string;
  submitted = false;
  private logIn = new BehaviorSubject<boolean>(false)
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.adminlogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })

  }
  onLogin() {

    this.submitted = true;

    // const { username, Password } = this.adminlogin.value;
    // console.log(this.adminlogin.value)

    if (this.adminlogin.valid) {
      console.log(this.adminlogin.value);

      this.authService.login(this.adminlogin.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/home'])
        // debugger

        // if (res) {
        //   // this.logIn.next(true);

        // }


      }, err => {
        console.log(err);
        this.error = err;
        console.log(this.error);
      })
    }

  }
  get f() {
    return this.adminlogin.controls;
  }

}




