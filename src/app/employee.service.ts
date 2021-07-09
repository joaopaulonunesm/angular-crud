import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://ec2-3-230-151-213.compute-1.amazonaws.com";

  endpoint: string = this.baseUrl + '/employees/';

  constructor(private http: HttpClient) { }

  listEmplyees(){
    return this.http.get(this.endpoint);
  }

  getById(id: string){
    return this.http.get(this.endpoint + id);
  }

  delete(id: string){
    return this.http.delete(this.endpoint + id)
  }

  update(employee: any){
    return this.http.put(this.endpoint + employee.id, employee)
  }

  create(employee: any){
    return this.http.post(this.endpoint, employee)
  }
}
