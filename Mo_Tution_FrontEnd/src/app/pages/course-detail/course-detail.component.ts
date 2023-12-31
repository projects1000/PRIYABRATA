import { Component, OnInit ,SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import {TeacherComponent} from 'src/app/components/teacher/teacher.component';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  cards:any;
  constructor(private dialog: MatDialog,private route: ActivatedRoute, private courseServiceService:CourseServiceService){
   
    //It will call with same route , ngOnInit will not call when call is from same route
    route.params.subscribe(val => {
      let id=this.route.snapshot.params['standard'];
      this.courseServiceService.getTeacherInfo(id).subscribe(
        (data)=>{
          this.cards=data;
          console.log(data);
        },
        (error)=>{
          console.log(error);
         // alert(error)
        }
  )
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  ngOnInit(): void {  
  }

  fetchTeacherDetails(standard:any)
  {
    
      this.courseServiceService.getTeacherInfo(standard).subscribe(
        (data)=>{
          this.cards=data;
          console.log(data);
        },
        (error)=>{
          console.log(error);
          //alert(error)
        }
  )
  }

  openDialog() {
    const dialogRef = this.dialog.open(TeacherComponent, {
      width: '400px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // You can perform actions based on the dialog result here if needed
    });
  }
  // cards = [
  //   {
  //     subject: 'Mathematics',
  //     gender: 'Mrs',
  //     firstname: 'Satya',
  //     lastname: 'Das',
  //     content: 'She has 10 years of experience',
  //     details:
  //       'He is very experienced professional having degree from NIT Rourkela'
  //   },
  //   {
  //     subject: 'Science',
  //     gender: 'Mrs',
  //     firstname: 'Srabani',
  //     lastname: 'Pattanaik',
  //     content: 'She has 6 years of experience',
  //     details:
  //       'He is very experienced professional having degree from NIT Rourkela',
  //   },
  //   {
  //     subject: 'Gegraphy',
  //     gender: 'Mr',
  //     firstname: 'Mahesh',
  //     lastname: 'Mohanty',
  //     content: 'She has 16 years of experience',
  //     details:
  //       'He is very experienced professional having degree from NIT Rourkela',
  //   },
  //   {
  //     subject: 'English',
  //     gender: 'Mr',
  //     firstname: 'RajKishore',
  //     lastname: 'Behera',
  //     content: 'She has 8 years of experience',
  //     details:
  //       'He is very experienced professional having degree from NIT Rourkela',
  //   },
  //   {
  //     subject: 'History',
  //     gender: 'Mr',
  //     firstname: 'Bikash',
  //     lastname: 'Mishra',
  //     content: 'She has 3 years of experience',
  //     details:
  //       'He is very experienced professional having degree from NIT Rourkela',
  //   },
  // ];

  cardClicked(card: any) {
    // alert("Card clicked"+card.title)
  }

  openDialog1(enterAnimationDuration: string, exitAnimationDuration: string) :void {

    const dialogRef =  this.dialog.open(TeacherComponent, {
      height: '100%',
      width: '70%',
      enterAnimationDuration,
      exitAnimationDuration
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}

close(): void {
  this.dialog.closeAll();
}
}
