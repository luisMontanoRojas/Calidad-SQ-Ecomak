import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PromoComponent } from './promo.component';
import { AdmListPromoComponent } from '../adm-list-promo/adm-list-promo.component';
import { MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatTableModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AdmAddPromoComponent } from '../adm-add-promo/adm-add-promo.component';
import { AdmEditPromoComponent } from '../adm-edit-promo/adm-edit-promo.component';
import { AdmDetailPromoComponent } from '../adm-detail-promo/adm-detail-promo.component';
import { AdmListCommentComponent } from '../Commentary/adm-list-comment/adm-list-comment.component';
import { AdmAddCommentComponent } from '../Commentary/adm-add-comment/adm-add-comment.component';
import { CompartidosModule } from '../../Compartidos/compartidos.module'
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmSubirImagenComponent } from '../../PaginasEstaticas/adm-subir-imagen/adm-subir-imagen.component';

@NgModule({
  declarations: [PromoComponent, AdmListPromoComponent, AdmAddPromoComponent, AdmEditPromoComponent, AdmDetailPromoComponent, AdmListCommentComponent, AdmAddCommentComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PromoRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatButtonModule,
    CompartidosModule,
    MatProgressSpinnerModule

  ],
  entryComponents: [
    AdmAddPromoComponent,
    AdmEditPromoComponent,
    AdmAddCommentComponent,
    AdmConfirmDialogComponent,
    AdmSubirImagenComponent
  ]
})
export class PromoModule { }