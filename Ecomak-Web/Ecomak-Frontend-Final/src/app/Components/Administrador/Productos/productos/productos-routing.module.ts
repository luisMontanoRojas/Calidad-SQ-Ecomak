import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';
import { AdmDetalleCategoriaComponent } from '../Categorias/adm-detalle-categoria/adm-detalle-categoria.component';
import { AdmListCategoriaComponent } from '../Categorias/adm-list-categoria/adm-list-categoria.component';

const routes: Routes = [{ path: '', component: ProductosComponent,
children:[
  { path:'', component:AdmListCategoriaComponent},
  { path:':idCategoria', component:AdmDetalleCategoriaComponent},
]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
