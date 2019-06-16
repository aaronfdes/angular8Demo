import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { CustomerColumnFilterPipe } from './customer-column-filter.pipe';
import { DataService } from './services/data-service';
import { MockDataService } from './services/mock-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerDataService } from './services/customer-data.service';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from '../app-shared/auth-guard.service';
import { XsrfInterceptorService } from '../app-shared/xsrf-interceptor.service';

const routes: Routes = [
  { path: "customers", component: ListComponent, canActivate: [AuthGuardService] },
  { path: "customers/:id", component: DetailsComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    CustomerFilterPipe,
    CustomerColumnFilterPipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppSharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // ListComponent
  ],
  providers: [
    { provide: DataService, useClass: CustomerDataService }
  ]
})
export class CustomerModule { }
