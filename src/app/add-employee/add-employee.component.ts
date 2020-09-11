import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../Service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employees: Employee[];
  employeeForm: boolean;
  isNewEmployee: boolean;
  newEmployee: any;
  editEmployeeForm: boolean;
  editedemployee: Employee;
  editedemployeeId;
  destroy$: Subject<void> = new Subject();

  constructor(private employeeService:EmployeeService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.employeeForm = true;
    this.isNewEmployee = true;
    this.newEmployee = [];
    this.editEmployeeForm = false;
   }
   
  
   async ngOnInit():  Promise<void> {
    
    this.activatedRoute.params.subscribe( async (params) => {
      if(params.employeeId) {
        this.employeeForm = false;
        this.isNewEmployee = false;
        await this.getEmployeeData(params.employeeId);
        this.editEmployeeForm = true;
        
      }
    });
  }

  getEmployeeData(employeeId){
     this.employeeService.detailsEmployee(employeeId).subscribe(
       res => {
        this.editedemployee = res;
           this.employeeForm = false;
         this.editEmployeeForm = true;
       },
       err => {
         this.employeeForm = true;
         this.editEmployeeForm = false;
       })
   
  }

  saveemployee(employee: Employee) {
    if (this.isNewEmployee) {
      // add a new employee
      this.employeeService.addEmployee(employee).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/employees-list']);
        },
        err => {
          console.error(err);
          this.employeeForm = true;
          this.editEmployeeForm = false;
        })
    }
    
  }

  updateemployee() {
    this.employeeService.updateEmployee(this.editedemployee).subscribe(
      res => {
        this.router.navigate(['/employees-list']);
      },
      err => {
       console.error(err);
      })
   
  }




}
