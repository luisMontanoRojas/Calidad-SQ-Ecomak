import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';
import { UsrListCategoriaComponent } from '../usr-list-categoria/usr-list-categoria.component';
import { UsrDetailProductComponent } from '../usr-detail-product/usr-detail-product.component';
import { Product } from 'src/app/Models/Product';

const routes: Routes = [
  {
    path: '', component: ProductosComponent,children: [
      {
        path:'',component:UsrListCategoriaComponent
      },
      {
        path:':productId',component:UsrDetailProductComponent,data:{producto:Product}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
