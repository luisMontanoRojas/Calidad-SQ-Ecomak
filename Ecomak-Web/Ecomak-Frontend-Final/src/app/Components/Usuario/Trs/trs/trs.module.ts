import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrsRoutingModule } from './trs-routing.module';
import { TrsComponent } from './trs.component';
import { UsrListTrsComponent } from '../usr-list-trs/usr-list-trs.component';
import { UsrListProductsTrsComponent } from '../usr-list-products-trs/usr-list-products-trs.component';
import { UsrDetailProductTrsComponent } from '../usr-detail-product-trs/usr-detail-product-trs.component';
import {MatCardModule} from '@angular/material/card';
import { CompartidosModule } from '../../Compartidos/compartidos/compartidos.module';
import { UsrPasosCotizacionComponent } from '../../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';
import { UsrSubirImagenComponent } from '../../PaginasEstaticas/usr-subir-imagen/usr-subir-imagen.component';
import { UsrPaletColorsProductsComponent } from '../../PaginasEstaticas/usr-palet-colors-products/usr-palet-colors-products.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [TrsComponent,
    UsrListTrsComponent,
    UsrListProductsTrsComponent,
    UsrDetailProductTrsComponent
   ],
  
  imports: [
    CommonModule,
    TrsRoutingModule,
    MatCardModule,
    CompartidosModule,
    MatButtonModule
  ],
  entryComponents:[UsrPasosCotizacionComponent,UsrSubirImagenComponent,UsrPaletColorsProductsComponent]
})
export class TrsModule { }
