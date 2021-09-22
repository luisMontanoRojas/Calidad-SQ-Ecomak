import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmConfirmDialogComponent } from '../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AdmAddCategoriaComponent } from './adm-add-categoria/adm-add-categoria.component';
import { FormsModule } from '@angular/forms';
import { AdmEditCategoriaComponent } from './adm-edit-categoria/adm-edit-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmAddSubscriptorComponent } from '../Subscripciones/adm-add-subscriptor/adm-add-subscriptor.component';
import { AdmSubirImagenComponent } from '../PaginasEstaticas/adm-subir-imagen/adm-subir-imagen.component';

@NgModule({

  declarations: [AdmConfirmDialogComponent, AdmAddCategoriaComponent, AdmEditCategoriaComponent,AdmSubirImagenComponent,AdmAddSubscriptorComponent],
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule
  
  ],
  exports:[AdmConfirmDialogComponent,AdmAddCategoriaComponent,AdmEditCategoriaComponent,AdmSubirImagenComponent,AdmAddSubscriptorComponent],
  entryComponents: [
  ]
})
export class CompartidosModule { }
