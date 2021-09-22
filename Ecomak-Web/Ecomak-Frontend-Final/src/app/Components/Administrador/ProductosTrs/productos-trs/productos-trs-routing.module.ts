import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosTrsComponent } from './productos-trs.component';
import { AdmListCategoriasTrComponent } from '../categoriasTr/adm-list-categorias-tr/adm-list-categorias-tr.component';
import { AdmDetalleCategoriaTrComponent } from '../categoriasTr/adm-detalle-categoria-tr/adm-detalle-categoria-tr.component';


const routes: Routes = [{ path: '', component: ProductosTrsComponent,
children:[
  { path:'', component:AdmListCategoriasTrComponent},
  { path:':idCategoriaTr', component:AdmDetalleCategoriaTrComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosTrsRoutingModule { }
