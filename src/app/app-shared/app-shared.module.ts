import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './hightlight.directive';
import { ForbiddenNamesValidatorDirective } from './forbidden-names-validator';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    HightlightDirective,
    ForbiddenNamesValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HightlightDirective,
    ForbiddenNamesValidatorDirective
  ],
  providers: [
    //{ provide: AuthGuardService, useClass: AuthGuardService } // since provide and useClass are the same we can do
    AuthGuardService
  ]
})
export class AppSharedModule { }
