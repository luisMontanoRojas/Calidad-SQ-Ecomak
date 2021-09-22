import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscripcionesComponent } from './subscripciones.component';
import { AdmListSubscripcionesComponent } from '../adm-list-subscripciones/adm-list-subscripciones.component';

const routes: Routes = [{ path: '', component: SubscripcionesComponent,
  children:[
    {path:'', component: AdmListSubscripcionesComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscripcionesRoutingModule { }
