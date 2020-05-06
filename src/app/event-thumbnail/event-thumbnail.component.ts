import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:any


// set to any because we're returning a 
  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }

  // ngClass can return an object 
  // or a string  which is space separated lis of classes 
  // or you can retrun an array of strings
  // First return applies if the statement is true ‘otherwise return an empty string

  getStartWithNgClass() {
    if (this.event && this.event.time === '10:00 am')
      return 'italicise';
      return '';
  }


  constructor() { }

  ngOnInit() {
  }

}
