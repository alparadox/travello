import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  @Input() imageUrl: string = 'assets/images/Hotel1.png';
  @Input() title: string = "DoubleTree Montreal Hotel"
  @Input() oldPrice: string = "149"
  @Input() newPrice: string = "99"
  @Input() description: string = "Habitasse quis morbi morbi nunc dignissim convallis vestibulum. Pharetra vel nulla quis egestas dui, duis nec vulputate nunc."

  constructor() { }

  ngOnInit(): void {
  }

}
