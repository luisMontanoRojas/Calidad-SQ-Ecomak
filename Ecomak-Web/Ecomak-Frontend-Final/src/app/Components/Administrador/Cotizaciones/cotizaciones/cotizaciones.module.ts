import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionesRoutingModule } from './cotizaciones-routing.module';
import { CotizacionesComponent } from './cotizaciones.component';
import { AdmListCotizacionComponent } from '../adm-list-cotizacion/adm-list-cotizacion.component';
import { MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatTableModule, MatSnackBarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CompartidosModule } from '../../Compartidos/compartidos.module';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmDetalleCotizacionComponent } from '../adm-detalle-cotizacion/adm-detalle-cotizacion.component';


@NgModule({
  declarations: [CotizacionesComponent, AdmListCotizacionComponent, AdmDetalleCotizacionComponent],
  imports: [
    CommonModule,
    CotizacionesRoutingModule,
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
    AdmConfirmDialogComponent,
    AdmDetalleCotizacionComponent
  ]
})
export class CotizacionesModule { }
