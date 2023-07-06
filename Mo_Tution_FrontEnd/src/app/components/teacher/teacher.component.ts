import { Component ,OnInit,ViewChild ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Teacher } from 'src/app/pojo/teacher.model';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit{
  @ViewChild('teacher') form!: NgForm; // Get the form reference
  
  teacher: Teacher = new Teacher(); // default value
  constructor(private courseService: CourseServiceService,private _snackBar: MatSnackBar) {
    this.teacher = new Teacher();
  }
 
ngOnInit(): void{}

formSubmit(){
  //alert("Form Module Called");
  console.log(this.teacher);
 

  this.courseService.addTeacher(this.teacher).subscribe(
    (data:any)=>{
      console.log(data);
      Swal.fire('Success Done!!', 'Dear '+data.name +' ,Thanks for registering with Us', 'success');

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
