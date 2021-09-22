import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmLoginRoutingModule } from './adm-login-routing.module';
import { AdmLoginComponent } from './adm-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatSlideToggleModule, MatSelectModule, MatOptionModule } from '@angular/material';



@NgModule({
  declarations: [AdmLoginComponent],
  imports: [
    CommonModule,
    AdmLoginRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatInputModule,
         MatCardModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatOptionModule
    
  ]
})
export class AdmLoginModule { }
