import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumnailComponent } from './event-thumnail.component';

describe('EventThumnailComponent', () => {
  let component: EventThumnailComponent;
  let fixture: ComponentFixture<EventThumnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThumnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThumnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
