import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 events:any [];


  constructor(private eventService: EventService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
        this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('received:', data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName); 
  }
}
