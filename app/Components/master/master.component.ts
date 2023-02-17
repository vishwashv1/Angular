import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  toShow : number = 0;
  btnMessage : string ="Add Employee";
  employees :Employee[] =[];
  selectedEmp: Employee={} as Employee;
  ngOnInit():void 
  {
    this.employees.push({id:3341, Name:"Vishwas", Address:"chikkaballapura", Salary:2500, pic:"./assets/Images/Darabendre.jfif"});
    this.employees.push({id:3342, Name:"Sachin", Address:"chikkaballapura", Salary:2500, pic:"./assets/Images/Kuvempu.jfif"});
    this.employees.push({id:3338, Name:"Pavan", Address:"chikkaballapura", Salary:2500, pic:"./assets/Images/Pampa.jfif"});
    this.employees.push({id:3341, Name:"Vishwas", Address:"chikkaballapura", Salary:2500, pic:""});


  }
  onEdit(emp:Employee)
  {
    this.selectedEmp=emp;
  }
  onDeleteHandler(emp:Employee)
  {
    let index=this.employees.indexOf(emp);
    this.employees.splice(index,1);
  }
  onAddHandler(emp:Employee)
  {
    this.employees.push(emp);
    this.employees=this.employees.slice();
  }
  onShow(){
    this.toShow =  this.toShow === 0 ? 1 : 0;
    if(this.toShow == 1)
      this.btnMessage = "Cancel Adding";
      else this.btnMessage = "Add Employee";
  }


}
