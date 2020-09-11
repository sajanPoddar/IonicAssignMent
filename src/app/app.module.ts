import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { dateTransferPipe } from './dateTransfer.pipe';
import { OlderDirective } from './older.directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    DashboardComponent,
    AddEmployeeComponent,
    NotFoundPageComponent,
    EmployeeDetailsComponent,
    DetailViewComponent,
    dateTransferPipe,
    OlderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
