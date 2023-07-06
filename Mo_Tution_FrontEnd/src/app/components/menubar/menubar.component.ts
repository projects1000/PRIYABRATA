import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
   currentPageUrl:string='';
  constructor(private router:Router)
  {
    this.currentPageUrl=router.url;
  }
}
