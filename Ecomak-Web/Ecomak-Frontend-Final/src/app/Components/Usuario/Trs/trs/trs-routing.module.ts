import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrsComponent } from './trs.component';
import { UsrListTrsComponent } from '../usr-list-trs/usr-list-trs.component';
import { UsrDetailProductTrsComponent } from '../usr-detail-product-trs/usr-detail-product-trs.component';

const routes: Routes = [
  {
     path: '', component: TrsComponent,children:[
       {path:'',component:UsrListTrsComponent},
       {path:':productIdTr',component:UsrDetailProductTrsComponent}
     ] 
  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrsRoutingModule { }
