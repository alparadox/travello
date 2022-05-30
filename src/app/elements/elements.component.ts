import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  @Input() titleSmall: string = 'button';
  @Input() titleBig: string = 'button';
  @Input() titleGhost: string = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
