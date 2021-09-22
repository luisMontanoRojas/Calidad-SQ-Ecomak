import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { AdmListProductsComponent } from '../adm-list-products/adm-list-products.component';
import { AdmDetalleCategoriaComponent } from '../Categorias/adm-detalle-categoria/adm-detalle-categoria.component';
import { AdmListCategoriaComponent } from '../Categorias/adm-list-categoria/adm-list-categoria.component';
import { AdmAddProductsComponent } from '../adm-add-products/adm-add-products.component';
import { AdmDetalleProductsComponent } from '../adm-detalle-products/adm-detalle-products.component';
import { AdmEditProductsComponent } from '../adm-edit-products/adm-edit-products.component';
import { MatIconModule, MatFormFieldModule, MatTableModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatDialogModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { CompartidosModule } from '../../Compartidos/compartidos.module';
import { FormsModule } from '@angular/forms';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmAddCategoriaComponent } from '../../Compartidos/adm-add-categoria/adm-add-categoria.component';
import { AdmEditCategoriaComponent } from '../../Compartidos/adm-edit-categoria/adm-edit-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmSubirImagenComponent } from '../../PaginasEstaticas/adm-subir-imagen/adm-subir-imagen.component';

@NgModule({
  declarations: [
    ProductosComponent,
    AdmAddProductsComponent,
    AdmDetalleProductsComponent,
    AdmEditProductsComponent,
    AdmListProductsComponent,
    AdmDetalleCategoriaComponent,
    AdmListCategoriaComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProductosRoutingModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    CompartidosModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    AdmConfirmDialogComponent,AdmAddCategoriaComponent,AdmEditCategoriaComponent,AdmAddProductsComponent,AdmEditProductsComponent,
    AdmDetalleProductsComponent,AdmSubirImagenComponent
  ]
})
export class ProductosModule { }
