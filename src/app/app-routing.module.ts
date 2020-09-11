import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


const routes: Routes = [
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'add-employee', component:  AddEmployeeComponent},
  { path: 'detailView/:id', component:  DetailViewComponent},
  { path: 'edit-employee/:employeeId', component:  AddEmployeeComponent},
  { path: '', redirectTo: '/employees-list', pathMatch: 'full'},
  { path: '**', component:  NotFoundPageComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
