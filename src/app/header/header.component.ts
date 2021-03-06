import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output() employeeListSelected = new EventEmitter<string>();

    onSelect(selected: string) {
        this.employeeListSelected.emit(selected);
    }

}