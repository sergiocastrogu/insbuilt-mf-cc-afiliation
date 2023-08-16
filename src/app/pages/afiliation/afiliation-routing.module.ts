import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCAfiliationComponent } from './cc-afiliation/cc-afiliation.component';

const routes: Routes = [
  {
    path: '',
    component: CCAfiliationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliationRoutingModule { }
