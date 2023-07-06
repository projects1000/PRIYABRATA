import { Component, OnInit } from '@angular/core';
import {Course} from '../courses/course';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

   courses: Course[]=[];
  constructor(){}
  ngOnInit(): void {
      
  }
}
