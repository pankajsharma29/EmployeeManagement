import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesEventsComponent } from './employees-events/employees-events.component';
import { EventsEditComponent } from './employees-events/events-edit/events-edit.component';
import { EmployeeRecordComponent } from './employees/employee-list/employee-record/employee-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeesEventsComponent,
    EventsEditComponent,
    EmployeeRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
