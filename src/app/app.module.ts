import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBinding } from './data-binding.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { AppSharedModule } from './app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './route-config';
import { XsrfInterceptorService } from './app-shared/xsrf-interceptor.service';
import { ChangeDetectionComponent, SimpleComponent } from './change-detection/change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBinding,
    RxjsComponent,
    ChangeDetectionComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CustomerModule,
    UsersModule,
    AppSharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptorService, multi: true }
  ],
  // bootstrap: [AppComponent, HelloComponent] // we can bootstrap multiple components
  bootstrap: [AppComponent]
})
export class AppModule { }
