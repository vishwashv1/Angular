import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Module/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  url: string="http://localhost:126";

  
  constructor(private roxy: HttpClient) 
  { 

  }
  public getEmployee():Observable<Employee[]>
  {
    return this.roxy.get<Employee[]>(this.url)
  }
}
