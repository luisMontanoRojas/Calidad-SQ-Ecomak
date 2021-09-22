import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PromoComponent } from './promo.component';
import { UsrListPromoComponent } from '../usr-list-promo/usr-list-promo.component';
import { UsrDetailPromoComponent } from '../usr-detail-promo/usr-detail-promo.component';
import { UsrListCommentaryComponent } from '../Comment/usr-list-commentary/usr-list-commentary.component';
import { UsrAddCommentaryComponent } from '../Comment/usr-add-commentary/usr-add-commentary.component';
import { MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PromoComponent, UsrListPromoComponent, UsrDetailPromoComponent, UsrListCommentaryComponent, UsrAddCommentaryComponent],
  imports: [
    CommonModule,
    PromoRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  entryComponents: [
    UsrAddCommentaryComponent
  ]
})
export class PromoModule { }
