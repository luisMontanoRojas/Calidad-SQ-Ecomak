import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { FormsModule, NgModel, ReactiveFormsModule, NgModelGroup, NgForm } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
    
  ]
})
export class ContactoModule { }
