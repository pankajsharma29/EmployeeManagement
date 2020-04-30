import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {
  @Output() employeeWasSelected = new EventEmitter<Employee>();

  employees: Employee[] = [
    new Employee('Test', "Test description", "https://image.shutterstock.com/image-photo/confident-handsome-student-holding-books-260nw-366568778.jpg"),
    new Employee('Pankaj', "Pankaj description", "https://image.shutterstock.com/image-photo/confident-handsome-student-holding-books-260nw-366568778.jpg"),
    new Employee('Kashish', "Kashish description", "https://image.shutterstock.com/image-photo/confident-handsome-student-holding-books-260nw-366568778.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onEmployeeSelected(employee: Employee) {
    this.employeeWasSelected.emit(employee);
  }

}
