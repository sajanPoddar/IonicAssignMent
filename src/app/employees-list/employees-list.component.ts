import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee;

  constructor(private employeeService:EmployeeService,private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  async getEmployees(){
    //  this.employeeService.getEmployeesFromData().subscribe(
    //       res => {
    //         console.log(res);
    //           this.employees = res;
    //       },
    //       err => {
    //         this.userForm = true;
    //         this.editUserForm = false;
    //       })
    await this.employeeService.getEmployeesData().then(
      res => {
        this.employees = res;
      }, err => {
        console.error(err);
      }
    );
    
  }

  


}
