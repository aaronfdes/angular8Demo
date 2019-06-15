import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './hightlight.directive';
import { ForbiddenNamesValidatorDirective } from './forbidden-names-validator';

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
  ]
})
export class AppSharedModule { }
