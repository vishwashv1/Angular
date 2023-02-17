import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent {
  @Input() selectedEmp : Employee={} as Employee

  @Output() onDelete : EventEmitter<Employee> = new EventEmitter<Employee>();

  invokeFunc()
  {
    this.onDelete.emit(this.selectedEmp);
  }

}
