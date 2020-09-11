import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiRoot: any;
  constructor( private http: HttpClient) {
    this.apiRoot = 'https://my-json-server.typicode.com/sajanPoddar/Angular-Ionic';
     }
     
     getEmployeesFromData(): Observable<Employee> {
      return this.http.get<Employee>(this.apiRoot+'/employees');
    }
  
    addEmployee(employee: Employee) {
      const formData = new FormData();
      formData.append('name', employee.name);
      formData.append('address', employee.address);
      formData.append('email', employee.email);
      formData.append('employee_ID', employee.employee_ID);
      formData.append('birth_date', employee.birth_date);
      formData.append('designation', employee.designation);
      return this.http.post <any>(this.apiRoot+'/employees', formData);
  
    }
    
    updateEmployee(employee: Employee) {
      const formData = new FormData();
      formData.append('name', employee.name);
      formData.append('address', employee.address);
      formData.append('email', employee.email);
      formData.append('employee_ID', employee.employee_ID);
      formData.append('birth_date', employee.birth_date);
      formData.append('designation', employee.designation);
      return this.http.put<any>(this.apiRoot+'/employees/'+employee.id, formData);
    }
    
    deleteEmployee(employee: Employee): Observable<Employee>{
      return this.http.delete<Employee>('https://my-json-server.typicode.com/sajanPoddar/Angular-Ionic/employees/'+employee.id);
    }

    detailsEmployee(uid): Observable<Employee>{
      return this.http.get<Employee>(this.apiRoot+'/employees/'+uid);
    }

    getEmployeesData():Promise<Employee> {
      return new Promise((resolve, reject) => {
        let apiURL = `${this.apiRoot}/employees`;
        this.http
          .get<Employee>(apiURL)
          .toPromise()
          .then(
            res => {
              // Success
              resolve(res);
            },
            msg => {
              // Error
              reject(msg);
            }
          );
      });
    }
}
