import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  changeText: boolean=true;
  isLoggedIn=false;
  user=this.login.getUser();
  constructor(public login:LoginService){
  }
  ngOnInit():void{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    // this.login.loginStatusSubject.asObservable().subscribe((data)=>{
    //   this.isLoggedIn=this.login.isLoggedIn();
    //   this.user=this.login.getUser();
    // });

    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    
  }
  public logout(){
    this.login.logout();
    this.login.loginStatusSubject.next(false);
    window.location.reload();
  }
}
