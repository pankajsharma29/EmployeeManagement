import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.sass']
})
export class EmployeeRecordComponent implements OnInit {
  @Input() employee: Employee;
  @Output() employeeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedEmployee() {
    this.employeeSelected.emit();
  }

}
