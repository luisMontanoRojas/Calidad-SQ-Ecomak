import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmLoginComponent } from './adm-login.component';

const routes: Routes = [{ path: '', component: AdmLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmLoginRoutingModule { }
