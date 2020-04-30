import { Component, OnInit } from '@angular/core';
import { Events } from '../shared/events.model';

@Component({
  selector: 'app-employees-events',
  templateUrl: './employees-events.component.html',
  styleUrls: ['./employees-events.component.sass']
})
export class EmployeesEventsComponent implements OnInit {
  events: Event[] = [
    new Events('Cricket', 'Bangalore'),
    new Events('Football', 'Mysore')
  ];
  constructor() { }

  ngOnInit() {
  }

  onEventsAdded(event: Events) {
    this.events.push(event);
  }

}
