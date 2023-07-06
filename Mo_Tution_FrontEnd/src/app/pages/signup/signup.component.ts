import { Component ,OnInit,ViewChild ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/UserAuth/user';
//This is used for sweet messaging instead of alert
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
//sweet alert
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  @ViewChild('register') form!: NgForm; // Get the form reference
  
  user: User = new User(); // default value
  constructor(private userService: UserServiceService,private _snackBar: MatSnackBar) {
    this.user = new User();
  }
 
  // @Input() user!: User;
 
  // public user={
  //   username:'test',
  //   password:'',
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   phone:0
  // }
ngOnInit(): void{}

formSubmit(){
  //alert("Form Module Called");
  console.log(this.user);
 

  this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      console.log(data);
      Swal.fire('Success Done!!', 'Dear '+data.username +' ,Thanks for registering with Us', 'success');

      // this._snackBar.open('User Registration success', 'Close', {
      //   duration: 3000,
      //   horizontalPosition:'right',
      //   verticalPosition:'top'

      // });
    
    },
    (error)=>{
      console.log(error);
      //alert("Something went wrong")
      this._snackBar.open('Something went wrong', 'Close', {
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition:'top'

      });
    }
  )

 
   
  // this.userService.deleteUser(100).subscribe(
  //   (data)=>{
  //     console.log(data);
  //     alert("Success");
  //   },
  //   (error)=>{
  //     console.log(error);
  //     alert("Something went wrong")
  //   }
  // )
}

onResetClick() {
 // this.userService.delete('100').subscribe();
  this.form.reset(); // Reset the form
}


}
