import { Component ,OnInit,ViewChild ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { Teacher } from 'src/app/pojo/teacher.model';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Course } from 'src/app/courses/course';

@Component({
  selector: 'app-signup',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit{
  @ViewChild('teacher') form!: NgForm; // Get the form reference
  
  teacher: Teacher = new Teacher(); // default value
  _courselist: Course[]=[];

  constructor(private courseService: CourseServiceService,private _snackBar: MatSnackBar) {
    this.teacher = new Teacher();
  }
  parentSelector: boolean = false;
  selectedIds: number[] = [];
 
  standard = [
    { id: 1, select: false, name: 'Class I' },
    { id: 2, select: false, name: 'Class II' },
    { id: 3, select: false, name: 'Class III' },
    { id: 4, select: false, name: 'Class IV' },
    { id: 5, select: false, name: 'Class V' },
    { id: 6, select: false, name: 'Class VI' },
    { id: 7, select: false, name: 'Class VII' },
    { id: 8, select: false, name: 'Class VIII' },
    { id: 9, select: false, name: 'Class IX' },
    { id: 10, select: false, name: 'Class X' }

  ];
  onChangeStandard($event:any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.standard = this.standard.map((d) => {
      
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
   
      return d;
    });

    this.selectedIds = this.standard.filter(item => item.select).map(item => item.id);
    
    //console.log(this.standard);
    console.log("Total Standardid", this.selectedIds);
  }
// getCourses(){
//   this._courselist=[{id:1,name:"sd1",select:false},
//                     {id:2,name:"sd2",select:false},
//                     {id:3,name:"sd3",select:false},
//                     {id:4,name:"sd4",select:false},
//                     {id:5,name:"sd5",select:false},
//                     {id:6,name:"sd6",select:false},
//                     {id:7,name:"sd7",select:false},
//                     {id:8,name:"sd8",select:false},
//                     {id:9,name:"sd9",select:false},
//                     {id:10,name:"sd10",select:false}
// ]
// }
// items = [
//   { id: 'checkbox1', checked: false, label: 'Standard1' },
//   { id: 'checkbox2', checked: true, label: 'Standard2' },
//   { id: 'checkbox3', checked: false, label: 'Standard1' },
//   { id: 'checkbox4', checked: true, label: 'Standard2' },
//   { id: 'checkbox5', checked: false, label: 'Standard1' },
//   { id: 'checkbox6', checked: true, label: 'Standard2' },
//   { id: 'checkbox7', checked: false, label: 'Standard1' },
//   { id: 'checkbox8', checked: true, label: 'Standard2' },
//   { id: 'checkbox9', checked: false, label: 'Standard1' },
//   { id: 'checkbox10', checked: true, label: 'Standard2' },
// ];

ngOnInit(): void{
  //this.getCourses();
}

formSubmit(){
  //alert("Form Module Called");
  console.log(this.teacher);
  
  this.teacher.standard=this.selectedIds;

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
