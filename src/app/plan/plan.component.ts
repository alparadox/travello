import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input() titleButton = 'title';
  @Input() price = 39;
  @Input() rate = 'Personal';
  @Input() description = 'description for cards with tariff plan on the site';
  @Input() itemOne = 'Secure your customer usage';
  @Input() itemTwo = 'View basic analytics';
  @Input() itemFree = 'Up to 350 customer profiles';
  @Input() itemFour = 'Custom network name';

  constructor() { }

  ngOnInit(): void {
  }

}
