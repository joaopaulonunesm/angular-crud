import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'documento', 'actions'];

  employees: any;

  employeeData: any = {
    id: '',
    document: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private employeeService: EmployeeService) {}

  deleteEmployeeById(id: string){
    this.employeeService.delete(id).subscribe(data => {
      this.employees = this.employeeService.listEmplyees();
    });
  }

  saveEmployee(){
    if(this.employeeData.id == ''){
      this.insertEmployee();
    } else {
      this.updateEmployee();
    }
  }

  insertEmployee(){
    this.employeeService.create(this.employeeData).subscribe(data => {
      this.employees = this.employeeService.listEmplyees();
      this.cleanEmployeeData()
    });
  }

  updateEmployee(){
    this.employeeService.update(this.employeeData).subscribe(data => {
      this.employees = this.employeeService.listEmplyees();
      this.cleanEmployeeData()
    });
  }

  listEmployees(){
    this.employees = this.employeeService.listEmplyees().subscribe(data => {
      this.employees = data;
    });
  }

  loadEditEmployee(employee: any){
    this.employeeData = employee;
  }

  cancelForm(){
    this.listEmployees()
    this.cleanEmployeeData()
  }

  cleanEmployeeData(){
    this.employeeData = {
      id: '',
      document: '',
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  ngOnInit(): void {
    this.listEmployees();
  }
}
