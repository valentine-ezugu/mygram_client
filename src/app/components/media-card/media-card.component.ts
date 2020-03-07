 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() imgUrl: string;
  @Input() content: string;
  @Input() apiText: string;
  @Input() responseObj: any;
  expand = false;

  @Output() apiClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.responseObj);
  }

  onButtonClick() {
    this.expand = true;
    this.apiClick.next(this.apiText);
  }

}
