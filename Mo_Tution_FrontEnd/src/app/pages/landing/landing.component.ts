import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent  implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cards = [
    {
      subject: 'CBSE-BOARD',
      course: 'CBSE',
      content: 'Some Details'
      
    },
    {
      subject: 'ICSE-BOARD',
      course: 'ICSE',
      content: 'Some Details'
    },
    {
      subject: 'CHSE-BOARD',
      course: 'CHSE',
      content: 'Some Details'
    },
    {
      subject: 'TECH',
      course: 'TECH',
      content: 'Some Details'
    },
  ];

  cardClicked(card: any) {
    // alert("Card clicked"+card.title)
  }
}
