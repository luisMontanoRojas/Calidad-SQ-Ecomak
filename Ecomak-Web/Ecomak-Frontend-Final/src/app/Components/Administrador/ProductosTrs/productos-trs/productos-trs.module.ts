import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosTrsRoutingModule } from './productos-trs-routing.module';
import { ProductosTrsComponent } from './productos-trs.component';
import { AdmListCategoriasTrComponent } from '../categoriasTr/adm-list-categorias-tr/adm-list-categorias-tr.component';
import { MatIconModule, MatFormFieldModule, MatTableModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatDialogModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { CompartidosModule } from '../../Compartidos/compartidos.module';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmAddCategoriaComponent } from '../../Compartidos/adm-add-categoria/adm-add-categoria.component';
import { AdmDetalleCategoriaTrComponent } from '../categoriasTr/adm-detalle-categoria-tr/adm-detalle-categoria-tr.component';
import { AdmEditCategoriaComponent } from '../../Compartidos/adm-edit-categoria/adm-edit-categoria.component';
import { AdmListProductosTrComponent } from '../adm-list-productos-tr/adm-list-productos-tr.component';
import { AdmAddProductosTrComponent } from '../adm-add-productos-tr/adm-add-productos-tr.component';
import { FormsModule } from '@angular/forms';
import { AdmEditProductosTrComponent } from '../adm-edit-productos-tr/adm-edit-productos-tr.component';
import { AdmDetalleProductoTrComponent } from '../adm-detalle-producto-tr/adm-detalle-producto-tr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmSubirImagenComponent } from '../../PaginasEstaticas/adm-subir-imagen/adm-subir-imagen.component';


@NgModule({
  declarations: [ProductosTrsComponent,AdmListCategoriasTrComponent,AdmDetalleCategoriaTrComponent,AdmListProductosTrComponent,AdmAddProductosTrComponent,
    AdmEditProductosTrComponent,AdmDetalleProductoTrComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProductosTrsRoutingModule,
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
    AdmConfirmDialogComponent,AdmAddCategoriaComponent,AdmEditCategoriaComponent,AdmAddProductosTrComponent,AdmEditProductosTrComponent,
    AdmDetalleProductoTrComponent,AdmSubirImagenComponent
  ]
})
export class ProductosTrsModule { }
