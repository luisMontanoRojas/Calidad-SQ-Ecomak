import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsrQuienesSomosComponent } from './usr-quienes-somos.component';

const routes: Routes = [{ path: '', component: UsrQuienesSomosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsrQuienesSomosRoutingModule { }
