import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoComponent } from './promo.component';
import { UsrListPromoComponent } from '../usr-list-promo/usr-list-promo.component';
import { UsrDetailPromoComponent } from '../usr-detail-promo/usr-detail-promo.component';

const routes: Routes = [{ path: '', component: PromoComponent,
  children:[
    { path:'', component:UsrListPromoComponent},
    { path:':promoId', component:UsrDetailPromoComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
