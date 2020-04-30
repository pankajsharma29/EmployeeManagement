import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //title = 'EmpolyeesManagement';
  loadedEmployeesList = 'employees';

  onNavigate(selectedEmployeeList: string) {
    this.loadedEmployeesList = selectedEmployeeList;
  }
}
