import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from '../Service/employee.service';
import { Employee } from '../models/employee';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
    id: number;
    employee: Employee;
  constructor(private route: ActivatedRoute,private router:Router, private employeeService: EmployeeService) { }

   async ngOnInit():  Promise<void> {
     await this.route.params.subscribe(params => {
      this.id = params['id'];
      
      });
      await this.getEmployeeData(this.id);
  }

  getEmployeeData(id){
    this.employeeService.detailsEmployee(id).subscribe(
         res => {
             this.employee = res;
             
         },
         err => {
          
         })
  }

  removeEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(
      res => {
        this.router.navigate(['/employees-list']);
      },
      err => {
        
      })
  }

}
