import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsrQuienesSomosComponent } from './Components/Usuario/PaginasEstaticas/usr-quienes-somos/usr-quienes-somos.component';
import { UsrContactoComponent } from './Components/Usuario/PaginasEstaticas/usr-contacto/usr-contacto.component';
import { UsrHomePageComponent } from './Components/Usuario/PaginasEstaticas/usr-home-page/usr-home-page.component';
import { UsrNavbarComponent } from './Components/Usuario/Layout/usr-navbar/usr-navbar.component';
import { UsrFooterComponent } from './Components/Usuario/Layout/usr-footer/usr-footer.component';
import { AdmHomePageComponent } from './Components/Administrador/PaginasEstaticas/adm-home-page/adm-home-page.component';
import { AdmAddPromoComponent } from './Components/Administrador/Promo/adm-add-promo/adm-add-promo.component';
import { AdmDetailPromoComponent } from './Components/Administrador/Promo/adm-detail-promo/adm-detail-promo.component';
import { AdmEditPromoComponent } from './Components/Administrador/Promo/adm-edit-promo/adm-edit-promo.component';
import { AdmItemPromoComponent } from './Components/Administrador/Promo/adm-item-promo/adm-item-promo.component';
import { AdmListPromoComponent } from './Components/Administrador/Promo/adm-list-promo/adm-list-promo.component';
import { AdmAddCommentComponent } from './Components/Administrador/Commentary/adm-add-comment/adm-add-comment.component';
import { AdmEditCommentComponent } from './Components/Administrador/Commentary/adm-edit-comment/adm-edit-comment.component';
import { AdmItemCommentComponent } from './Components/Administrador/Commentary/adm-item-comment/adm-item-comment.component';
import { AdmListCommentComponent } from './Components/Administrador/Commentary/adm-list-comment/adm-list-comment.component';
import { UsrListPromoComponent } from './Components/Usuario/Promo/usr-list-promo/usr-list-promo.component';
import { UsrItemPromoComponent } from './Components/Usuario/Promo/usr-item-promo/usr-item-promo.component';
import { UsrDetailPromoComponent } from './Components/Usuario/Promo/usr-detail-promo/usr-detail-promo.component';
import { UsrListCommentaryComponent } from './Components/Usuario/Commentary/usr-list-commentary/usr-list-commentary.component';
import { UsrItemCommentaryComponent } from './Components/Usuario/Commentary/usr-item-commentary/usr-item-commentary.component';
import { UsrAddCommentaryComponent } from './Components/Usuario/Commentary/usr-add-commentary/usr-add-commentary.component';
import { AdmAddCategoriaComponent } from './Components/Administrador/Categorias/adm-add-categoria/adm-add-categoria.component';
import { AdmListCategoriaComponent } from './Components/Administrador/Categorias/adm-list-categoria/adm-list-categoria.component';
import { UsrItemCategoriaComponent } from './Components/Usuario/Categorias/usr-item-categoria/usr-item-categoria.component';
import { UsrListCategoriaComponent } from './Components/Usuario/Categorias/usr-list-categoria/usr-list-categoria.component';
import { UsrItemProductosComponent } from './Components/Usuario/Productos/usr-item-productos/usr-item-productos.component';
import { UsrListProductosComponent } from './Components/Usuario/Productos/usr-list-productos/usr-list-productos.component';
import { AdmAddProductosComponent } from './Components/Administrador/Productos/adm-add-productos/adm-add-productos.component';
import { AdmListSubscripcionesComponent } from './Components/Administrador/Subscripciones/adm-list-subscripciones/adm-list-subscripciones.component';
import { AdmAddSubscriptorComponent } from './Components/Administrador/Subscripciones/adm-add-subscriptor/adm-add-subscriptor.component';
import { AdmDetalleSubscripcionComponent } from './Components/Administrador/Subscripciones/adm-detalle-subscripcion/adm-detalle-subscripcion.component';
import { AdmDetalleCategoriaComponent } from './Components/Administrador/Categorias/adm-detalle-categoria/adm-detalle-categoria.component';
import { AdmListProductosComponent } from './Components/Administrador/Productos/adm-list-productos/adm-list-productos.component';
import { AdmEditSubscripcionComponent } from './Components/Administrador/Subscripciones/adm-edit-subscripcion/adm-edit-subscripcion.component';
import { UsrDetalleProductosComponent } from './Components/Usuario/Productos/usr-detalle-productos/usr-detalle-productos.component';
import { AdmEditCategoriaComponent } from './Components/Administrador/Categorias/adm-edit-categoria/adm-edit-categoria.component';
import { AdmEditProductosComponent } from './Components/Administrador/Productos/adm-edit-productos/adm-edit-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatIcon, MatIconModule, MatCardActions, MatCardModule } from '@angular/material';
import { AdmDetalleProductoComponent } from './Components/Administrador/Productos/adm-detalle-producto/adm-detalle-producto.component';
import { AdmNavbarComponent } from './Components/Administrador/Layout/adm-navbar/adm-navbar.component';
import { AdmLoginComponent } from './components/Administrador/Login/adm-login/adm-login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { UsrPasosCotizacionesComponent } from './Components/Usuario/Cotizaciones/usr-pasos-cotizaciones/usr-pasos-cotizaciones.component';
import { AdmListCotizacionComponent } from './components/Administrador/Cotizaciones/adm-list-cotizacion/adm-list-cotizacion.component';
import { AdmDetalleCotizacionComponent } from './Components/Administrador/Cotizaciones/adm-detalle-cotizacion/adm-detalle-cotizacion.component';
import { AdmConfirmDialogComponent } from './Components/Administrador/PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { UsrListProductoTrComponent } from './Components/Usuario/ProductosTr/usr-list-producto-tr/usr-list-producto-tr.component';
import { UsrItemProductoTrComponent } from './Components/Usuario/ProductosTr/usr-item-producto-tr/usr-item-producto-tr.component';
import { UsrListTrComponent } from './Components/Usuario/trabajos-realizados/usr-list-tr/usr-list-tr.component';
import { UsrItemTrComponent } from './Components/Usuario/trabajos-realizados/usr-item-tr/usr-item-tr.component';
import { UsrDetalleProductosTrComponent } from './Components/Usuario/ProductosTr/usr-detalle-productos-tr/usr-detalle-productos-tr.component';
import { UsrSubirImagenComponent } from './Components/Usuario/PaginasEstaticas/usr-subir-imagen/usr-subir-imagen.component';
import { AdmListCategoriasTrComponent } from './Components/Administrador/Categorias-Tr/adm-list-categorias-tr/adm-list-categorias-tr.component';
import { AdmDetalleCategoriaTrComponent } from './Components/Administrador/Categorias-Tr/adm-detalle-categoria-tr/adm-detalle-categoria-tr.component';
import { AdmListProductosTrComponent } from './Components/Administrador/ProductosTr/adm-list-productos-tr/adm-list-productos-tr.component';
import { AdmAddProductosTrComponent } from './Components/Administrador/ProductosTr/adm-add-productos-tr/adm-add-productos-tr.component';
import { AdmEditProductosTrComponent } from './Components/Administrador/ProductosTr/adm-edit-productos-tr/adm-edit-productos-tr.component';
import { AdmDetalleProductoTrComponent } from './Components/Administrador/ProductosTr/adm-detalle-producto-tr/adm-detalle-producto-tr.component';
import { MatSliderModule } from '@angular/material/slider';
import { UsrTablaEmpresasComponent } from './Components/Usuario/PaginasEstaticas/usr-tabla-empresas/usr-tabla-empresas.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule}from '@angular/material/list';
import{MatToolbarModule}from '@angular/material/toolbar';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageContainerUsrComponent } from './Components/Pages/page-container-usr/page-container-usr.component';
import { ProductosColoresComponent } from './Components/Usuario/productos-colores/productos-colores.component';
import { UsrDialogImageComponent } from './Components/Usuario/PaginasEstaticas/usr-dialog-image/usr-dialog-image.component';



@NgModule({
  declarations: [
    AppComponent,
    UsrQuienesSomosComponent,
    UsrContactoComponent,
    UsrHomePageComponent,
    UsrNavbarComponent,
    UsrFooterComponent,
    AdmHomePageComponent,
    AdmAddPromoComponent,
    AdmDetailPromoComponent,
    AdmEditPromoComponent,
    AdmItemPromoComponent,
    AdmListPromoComponent,
    AdmAddCommentComponent,
    AdmEditCommentComponent,
    AdmItemCommentComponent,
    AdmListCommentComponent,
    UsrListPromoComponent,
    UsrItemPromoComponent,
    UsrDetailPromoComponent,
    UsrListCommentaryComponent,
    UsrItemCommentaryComponent,
    UsrAddCommentaryComponent,
    AdmAddCategoriaComponent,
    AdmListCategoriaComponent,
    UsrItemCategoriaComponent,
    UsrListCategoriaComponent,
    UsrItemProductosComponent,
    UsrListProductosComponent,
    AdmAddProductosComponent,
    AdmListSubscripcionesComponent,
    AdmAddSubscriptorComponent,
    AdmDetalleSubscripcionComponent,
    AdmDetalleCategoriaComponent,
    AdmListProductosComponent,
    AdmEditSubscripcionComponent,
    UsrDetalleProductosComponent,
    AdmEditCategoriaComponent,
    AdmEditProductosComponent,
    AdmConfirmDialogComponent,
    AdmDetalleProductoComponent,
    AdmNavbarComponent,
    AdmLoginComponent,
    AdmLoginComponent,
    UsrPasosCotizacionesComponent,
    AdmListCotizacionComponent,
    AdmDetalleCotizacionComponent,
    UsrListProductoTrComponent,
    UsrItemProductoTrComponent,
    UsrListTrComponent,
    UsrItemTrComponent,
    UsrDetalleProductosTrComponent,
    UsrSubirImagenComponent,
    AdmListCategoriasTrComponent,
    AdmDetalleCategoriaTrComponent,
    AdmListProductosTrComponent,
    AdmDetalleProductoTrComponent,
    AdmAddProductosTrComponent,
    AdmEditProductosTrComponent,
    AdmDetalleProductoTrComponent,
    UsrTablaEmpresasComponent,
    PageContainerUsrComponent,
    ProductosColoresComponent,
    UsrDialogImageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,

    MatSnackBarModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
   
  ],
  entryComponents: [UsrPasosCotizacionesComponent, 
    AdmConfirmDialogComponent, 
    AdmDetalleCotizacionComponent,
    AdmEditSubscripcionComponent,
    AdmEditPromoComponent,
    AdmEditProductosTrComponent,
    AdmEditCategoriaComponent,
    AdmEditProductosComponent,
    AdmAddProductosComponent,
    AdmAddCategoriaComponent,
    AdmAddPromoComponent,
    AdmAddSubscriptorComponent,
    AdmAddProductosTrComponent,
    AdmAddCommentComponent,
    UsrAddCommentaryComponent,
    UsrDialogImageComponent

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue:{appearance:'fill' }}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
