import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  title: string ="Welcome to Angular traning";
  value1 : number= 123;
  value2 : number =20;
  result : number = this.value1+this.value2;



  //functions od the components...
  onClick =()=>{
    alert("Hello from onclick function in typescript")
  }

  onAddFunction()
  {
    this.value1=Number(prompt("Entert first value"));
    this.value2=Number(prompt("Enter the Seconmd value"));
    this.result=this.value1+this.value2;
  }
}
