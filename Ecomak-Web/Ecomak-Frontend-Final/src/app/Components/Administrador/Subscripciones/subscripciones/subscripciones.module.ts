import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscripcionesRoutingModule } from './subscripciones-routing.module';
import { SubscripcionesComponent } from './subscripciones.component';
import { AdmListSubscripcionesComponent } from '../adm-list-subscripciones/adm-list-subscripciones.component';
import { MatIconModule, MatFormFieldModule, MatDialogModule, MatSnackBarModule, MatInputModule, MatTableModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AdmAddSubscriptorComponent } from '../adm-add-subscriptor/adm-add-subscriptor.component';
import { AdmEditSubscripcionComponent } from '../adm-edit-subscripcion/adm-edit-subscripcion.component';
import { AdmDetalleSubscripcionComponent } from '../adm-detalle-subscripcion/adm-detalle-subscripcion.component';
import { CompartidosModule } from '../../Compartidos/compartidos.module'
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubscripcionesComponent, AdmListSubscripcionesComponent, AdmEditSubscripcionComponent, AdmDetalleSubscripcionComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SubscripcionesRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    CompartidosModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    AdmAddSubscriptorComponent,
    AdmEditSubscripcionComponent,
    AdmDetalleSubscripcionComponent,
    AdmConfirmDialogComponent,
    AdmAddSubscriptorComponent
  ]
})
export class SubscripcionesModule { }
