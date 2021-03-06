import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list/event-list-resolver.service';

const routes: Routes = [
 {
  	path: 'events/new',
  	component: CreateEventComponent,
  	canDeactivate: ['canDeactivateCreateEvent'] // this in quotes cos it's a function not a service which we reference in the app module
  },
   { path: '', redirectTo: '/events',
    pathMatch: 'full'
   },
  {
  	path: 'events', 
  	component: EventListComponent,
  	resolve: {events: EventListResolverService}
  },
  {
  	path: 'events/:id', 
  	component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
  	path: '404',
  	component: Error404Component
  },
  {
  	path: 'user',
  	loadChildren: './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



