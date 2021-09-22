import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizacionesComponent } from './cotizaciones.component';
import { AdmListCotizacionComponent } from '../adm-list-cotizacion/adm-list-cotizacion.component';

const routes: Routes = [{
  path: '', component: CotizacionesComponent,
  children: [
    { path: '', component: AdmListCotizacionComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionesRoutingModule { }
