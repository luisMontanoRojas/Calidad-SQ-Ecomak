import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConstantsService } from './Services/common/constants.service';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule

  ],
  providers: [ConstantsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue:{appearance:'fill' }}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }