import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input() titleButton = 'title';

  constructor() { }

  ngOnInit(): void {
  }

}
