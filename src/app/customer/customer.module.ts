import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { CustomerColumnFilterPipe } from './customer-column-filter.pipe';
import { DataService } from './services/data-service';
import { MockDataService } from './services/mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDataService } from './services/customer-data.service';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    CustomerFilterPipe,
    CustomerColumnFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppSharedModule
  ],
  exports: [
    ListComponent
  ],
  providers: [
    { provide: DataService, useClass: CustomerDataService }
  ]
})
export class CustomerModule { }
