import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private route: ActivatedRoute, private courseServiceService:CourseServiceService){
    
  }

  ngOnInit(): void {
    alert("Hi")
    let id=this.route.snapshot.params['id'];

      this.courseServiceService.getTeacherInfo(id).subscribe(
        (data)=>{
          console.log(data);
          alert("Success");
        },
        (error)=>{
          console.log(error);
          alert(error)
        }
  )
  }
}
