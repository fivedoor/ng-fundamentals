import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

declare let toastr;

@Component({
/*  selector: 'event-list',
*/  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 events:any;


  constructor(private eventService: EventService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
      this.eventService.getEvents().subscribe(events => {this.events = events});
     // Same as used in Campaign Supernova:
     //  this.dataService.getAllTeamData().subscribe((results: any) => { this.testTeam = results[0];});
  }

  handleEventClicked(data) {
    console.log('received:', data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);

  }
}
