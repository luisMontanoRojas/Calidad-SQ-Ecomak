import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoComponent } from './promo.component';
import { AdmListPromoComponent } from '../adm-list-promo/adm-list-promo.component';
import { AdmDetailPromoComponent } from '../adm-detail-promo/adm-detail-promo.component';

const routes: Routes = [{ path: '', component: PromoComponent,
  children:[
    { path:'', component:AdmListPromoComponent},
    { path:':promoId', component:AdmDetailPromoComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
