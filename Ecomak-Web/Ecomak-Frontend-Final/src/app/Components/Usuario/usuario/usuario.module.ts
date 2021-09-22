import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsrNavbarComponent } from '../Layout/usr-navbar/usr-navbar.component';
import { UsrFooterComponent } from '../Layout/usr-footer/usr-footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatCardModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { UsrHomePageComponent } from '../PaginasEstaticas/usr-home-page/usr-home-page.component';
import { UsrDialogImageComponent } from '../PaginasEstaticas/usr-dialog-image/usr-dialog-image.component';
import { UsrTablaEmpresasComponent } from '../PaginasEstaticas/usr-tabla-empresas/usr-tabla-empresas.component';
import { UsrPasosCotizacionComponent } from '../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';
import { AdmAddSubscriptorComponent } from '../../Administrador/Subscripciones/adm-add-subscriptor/adm-add-subscriptor.component';
import { CompartidosModule } from '../../Administrador/Compartidos/compartidos.module';

@NgModule({
  declarations: [UsuarioComponent,UsrNavbarComponent,UsrFooterComponent,UsrHomePageComponent,UsrDialogImageComponent, UsrTablaEmpresasComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CompartidosModule

  ],
  entryComponents:[UsrDialogImageComponent,AdmAddSubscriptorComponent]
})
export class UsuarioModule { }
