import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('login') form!: NgForm; // Get the form reference

  loginData = {
    username: '',
    password: '',
  };
  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('User name is required!!', '', {
        duration: 3000,
      });
      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required!!', '', {
        duration: 3000,
      });
      return;
    }
    //request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('Success');
        console.log(data);
        //login user: set the token in local storage
        this.login.loginUser(data.token);

        //set the user data and redirect to role based page
        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          //redirect ...Admin admin-dashboard
          if (this.login.getUserRole() == 'ADMIN') {
            //window.location.href = '/admin';
            //event created and mark as true,, who will subscribe this event can receive true
            this.login.loginStatusSubject.next(true);
             this.router.navigate(['admin']);
          } else if (this.login.getUserRole() == 'NORMAL') {
            //window.location.href = '/user-dashboard';
            this.login.loginStatusSubject.next(true);
             this.router.navigate(['user-dashboard']);
          } else {
            this.login.logout();
          }
          //redirect ..Normal :Normal-dashboard
        });
      },
      (error) => {
        console.log('Error!');
        console.log(error);
        this.snack.open('Wrong Details', '', {
          duration: 3000,
        });
      }
    );
    console.log('login button clicked');
  }
  onResetClick() {
    alert('Hi');
    // this.userService.delete('100').subscribe();
    this.form.reset(); // Reset the form
  }
}
