import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Events } from '../../shared/events.model';

@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.sass']
})
export class EventsEditComponent implements OnInit {
  @ViewChild('eventNameInput') eventNameRef: ElementRef;
  @ViewChild('locationInput') locationRef: ElementRef;

  @Output() eventsAdded = new EventEmitter<Events>();

  constructor() { }

  ngOnInit() {
  }

  onAddEvents() {
    const evntName = this.eventNameRef.nativeElement.value;
    const locName = this.locationRef.nativeElement.value;
    const newEvent = new Events(evntName, locName);
    this.eventsAdded.emit(newEvent);
  }

}
