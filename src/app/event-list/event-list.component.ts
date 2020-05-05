import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  handleEventClicked(data) {
    console.log('received:', data)
  }

  constructor() { }

  ngOnInit() {
  }

}
