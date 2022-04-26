import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  submitted = false;
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.adminlogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })

  }
  onLogin() {

    this.submitted = true;
    console.log(this.adminlogin.value);
    // const { username, Password } = this.adminlogin.value;
    // console.log(this.adminlogin.value)

    if (!this.adminlogin.valid) {
      return;
    }
    this.authService.login(this.adminlogin.value).subscribe(() => {
      debugger
      this.router.navigate(['/home'])
    })
  }
  get f() {
    return this.adminlogin.controls;
  }

}




