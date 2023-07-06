import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './cbse.component.html',
  styleUrls: ['./cbse.component.css'],
})
export class CbseComponent implements OnInit {

  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
   
  }
  ngOnDestroy() {
    // alert("Dest")
  }
}
