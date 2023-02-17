import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent {
  Empid :number=0;
  empName :string ="";
  empAddress:string="";
  empPic:string="";
  @Output() onAddNew : EventEmitter<Employee> = new EventEmitter<Employee>();
 
  onInvokeFunc(){
    const Emp={} as Employee;
    Emp.id =this.Empid;
    Emp.Name=this.empName;
    Emp.Address=this.empAddress;
    Emp.pic=this.empPic;
    this.onAddNew.emit(Emp);
    this.clearfiled();
  }
  clearfiled()
  {
    this.Empid=0;
    this.empAddress="";
    this.empName="";
    this.empPic="";
  }

  SelectFile(event : any)
  {
    if(event.target.files && event.target.files.length)
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_ev) =>{this.empPic = reader.result as string;}
    }
    else
    {
      alert("select image");
    }
  }
  

  
}
