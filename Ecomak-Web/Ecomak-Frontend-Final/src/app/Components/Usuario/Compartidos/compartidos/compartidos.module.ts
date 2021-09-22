import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsrSubirImagenComponent } from '../../PaginasEstaticas/usr-subir-imagen/usr-subir-imagen.component';
import { UsrPasosCotizacionComponent } from '../../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';
import { UsrPaletColorsProductsComponent } from '../../PaginasEstaticas/usr-palet-colors-products/usr-palet-colors-products.component';
import { MatIconModule, MatCardModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsrPasosCotizacionComponent,UsrPaletColorsProductsComponent,UsrSubirImagenComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[UsrSubirImagenComponent,UsrPasosCotizacionComponent,UsrPaletColorsProductsComponent]
})
export class CompartidosModule { }
