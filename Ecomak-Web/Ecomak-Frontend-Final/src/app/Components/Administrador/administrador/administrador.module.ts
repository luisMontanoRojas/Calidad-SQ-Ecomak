import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { AdmNavbarComponent } from '../Layout/adm-navbar/adm-navbar.component';
import { MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AdmHomePageComponent } from '../PaginasEstaticas/adm-home-page/adm-home-page.component';
import { AdmFooterComponent } from '../Layout/adm-footer/adm-footer.component';

@NgModule({
  declarations: [AdministradorComponent,AdmNavbarComponent,AdmHomePageComponent,AdmFooterComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AdministradorModule { }
