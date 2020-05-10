import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

// To prevent page loading then data loading on page we create a service to wait until everything is ready to publish
// getEvents returns an observable
// call map on the observable which gives access to the events that passed in on that stream
// then return those events
// Typically you would call subscriibe on an observable but becasue the purpose of this is to be a resolver - we need to return the observable to angular so ng can watch the observable and see when it has finished - because subscribe returns a subscription not an ovbservable

export class EventListResolverService implements Resolve<any> {
  constructor(private eventService:EventService) {

  }
 resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
