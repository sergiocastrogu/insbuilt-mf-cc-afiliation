import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliationRoutingModule } from './afiliation-routing.module';
import { CCAfiliationComponent } from './cc-afiliation/cc-afiliation.component';


@NgModule({
  declarations: [
    CCAfiliationComponent
  ],
  imports: [
    CommonModule,
    AfiliationRoutingModule
  ]
})
export class AfiliationModule { }
