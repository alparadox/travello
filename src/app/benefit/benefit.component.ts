import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  @Input() title: string = 'text';
  @Input() description: string = 'text';
  @Input() imageUrl: string = 'assets/images/fire.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
