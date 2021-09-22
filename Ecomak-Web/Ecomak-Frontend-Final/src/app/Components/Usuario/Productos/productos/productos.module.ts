import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { UsrListCategoriaComponent } from '../usr-list-categoria/usr-list-categoria.component';
import { UsrListProductsComponent } from '../usr-list-products/usr-list-products.component';
import { UsrDetailProductComponent } from '../usr-detail-product/usr-detail-product.component';
import { MatCardModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { UsrPaletColorsProductsComponent } from '../../PaginasEstaticas/usr-palet-colors-products/usr-palet-colors-products.component';
import { UsrPasosCotizacionComponent } from '../../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';
import { FormsModule } from '@angular/forms';
import { UsrSubirImagenComponent } from '../../PaginasEstaticas/usr-subir-imagen/usr-subir-imagen.component';
import { CompartidosModule } from '../../Compartidos/compartidos/compartidos.module';


@NgModule({
  declarations: [
    ProductosComponent,
    UsrListCategoriaComponent,
    UsrListProductsComponent,
    UsrDetailProductComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ProductosRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CompartidosModule
  ],
  entryComponents:[UsrPasosCotizacionComponent,UsrSubirImagenComponent,UsrPaletColorsProductsComponent]
})
export class ProductosModule { }
