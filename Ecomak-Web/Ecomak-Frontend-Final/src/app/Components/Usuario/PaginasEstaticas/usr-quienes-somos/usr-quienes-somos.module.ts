import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsrQuienesSomosRoutingModule } from './usr-quienes-somos-routing.module';
import { UsrQuienesSomosComponent } from './usr-quienes-somos.component';


@NgModule({
  declarations: [UsrQuienesSomosComponent],
  imports: [
    CommonModule,
    UsrQuienesSomosRoutingModule
  ]
})
export class UsrQuienesSomosModule { }
