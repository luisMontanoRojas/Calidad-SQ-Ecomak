import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsrHomePageComponent } from './Components/Usuario/PaginasEstaticas/usr-home-page/usr-home-page.component';
import { UsrContactoComponent } from './Components/Usuario/PaginasEstaticas/usr-contacto/usr-contacto.component';
import { UsrQuienesSomosComponent } from './Components/Usuario/PaginasEstaticas/usr-quienes-somos/usr-quienes-somos.component';
import { AdmHomePageComponent } from './Components/Administrador/PaginasEstaticas/adm-home-page/adm-home-page.component';
import { AdmListPromoComponent } from './Components/Administrador/Promo/adm-list-promo/adm-list-promo.component';
import { AdmItemPromoComponent } from './Components/Administrador/Promo/adm-item-promo/adm-item-promo.component';
import { AdmAddPromoComponent } from './Components/Administrador/Promo/adm-add-promo/adm-add-promo.component';
import { AdmDetailPromoComponent } from './Components/Administrador/Promo/adm-detail-promo/adm-detail-promo.component';
import { AdmEditPromoComponent } from './Components/Administrador/Promo/adm-edit-promo/adm-edit-promo.component';
import { UsrListPromoComponent } from './Components/Usuario/Promo/usr-list-promo/usr-list-promo.component';
import { UsrItemPromoComponent } from './Components/Usuario/Promo/usr-item-promo/usr-item-promo.component';
import { UsrDetailPromoComponent } from './Components/Usuario/Promo/usr-detail-promo/usr-detail-promo.component';
import { UsrListCommentaryComponent } from './Components/Usuario/Commentary/usr-list-commentary/usr-list-commentary.component';
import { UsrItemCommentaryComponent } from './Components/Usuario/Commentary/usr-item-commentary/usr-item-commentary.component';
import { UsrAddCommentaryComponent } from './Components/Usuario/Commentary/usr-add-commentary/usr-add-commentary.component';
import { componentFactoryName } from '@angular/compiler';
import { UsrListProductosComponent } from './Components/Usuario/Productos/usr-list-productos/usr-list-productos.component';
import { UsrListCategoriaComponent } from './Components/Usuario/Categorias/usr-list-categoria/usr-list-categoria.component';
import { AdmListSubscripcionesComponent } from './Components/Administrador/Subscripciones/adm-list-subscripciones/adm-list-subscripciones.component';
import { AdmDetalleSubscripcionComponent } from './Components/Administrador/Subscripciones/adm-detalle-subscripcion/adm-detalle-subscripcion.component';
import { AdmListCategoriaComponent } from './Components/Administrador/Categorias/adm-list-categoria/adm-list-categoria.component';
import { AdmDetalleCategoriaComponent } from './Components/Administrador/Categorias/adm-detalle-categoria/adm-detalle-categoria.component';
import { UsrDetalleProductosComponent } from './Components/Usuario/Productos/usr-detalle-productos/usr-detalle-productos.component';
import { AdmDetalleProductoComponent } from './Components/Administrador/Productos/adm-detalle-producto/adm-detalle-producto.component';
import { AdmLoginComponent } from './components/Administrador/Login/adm-login/adm-login.component';
import { AuthGuard } from './helpers';
import { AdmListCotizacionComponent } from './components/Administrador/Cotizaciones/adm-list-cotizacion/adm-list-cotizacion.component';
import { UsrItemTrComponent } from './Components/Usuario/trabajos-realizados/usr-item-tr/usr-item-tr.component';
import { UsrListTrComponent } from './Components/Usuario/trabajos-realizados/usr-list-tr/usr-list-tr.component';
import { UsrDetalleProductosTrComponent } from './Components/Usuario/ProductosTr/usr-detalle-productos-tr/usr-detalle-productos-tr.component';
import { AdmListCategoriasTrComponent } from './Components/Administrador/Categorias-Tr/adm-list-categorias-tr/adm-list-categorias-tr.component';
import { AdmDetalleCategoriaTrComponent } from './Components/Administrador/Categorias-Tr/adm-detalle-categoria-tr/adm-detalle-categoria-tr.component';
import { AdmDetalleProductoTrComponent } from './Components/Administrador/ProductosTr/adm-detalle-producto-tr/adm-detalle-producto-tr.component';
import { PageContainerUsrComponent } from './Components/Pages/page-container-usr/page-container-usr.component';
const routes: Routes = [



  //rutas de usuario
  {
    path: '', component: PageContainerUsrComponent,
    children: [
      { path: '', component: UsrHomePageComponent },//home
       
      { path: 'quienes-somos', component: UsrQuienesSomosComponent },//paginaDeQuienesSomos
      { path: 'contacto', component: UsrContactoComponent },//paginaDeContactos
      { path: 'promos', component: UsrListPromoComponent },//Lista de promos vista usuarios
      { path: 'promos/:promoId', component: UsrDetailPromoComponent },//Detalle de promo vista usuarios
      { path: 'productos', component: UsrListCategoriaComponent },
      { path: 'categorias/:categoryId/productos/:productId', component: UsrDetalleProductosComponent },
      { path: 'categoriasTr/:categoryIdTr/trs/:productIdTr', component: UsrDetalleProductosTrComponent },

      { path: 'productosTr', component: UsrListTrComponent },

    ]
  },//paginaPrincipalUsr

  //rutas de administrador
  { path: 'admin/Login', component: AdmLoginComponent },
  { path: 'admin', component: AdmHomePageComponent, canActivate: [AuthGuard] },//paginaPrincipalAdm
  { path: 'admin/subscribe', component: AdmListSubscripcionesComponent, canActivate: [AuthGuard] },
  { path: 'admin/subscribe/:idSubscribe', component: AdmDetalleSubscripcionComponent, canActivate: [AuthGuard] },

  { path: 'admin/promociones', component: AdmListPromoComponent, canActivate: [AuthGuard] },//Lista de promos vista Administrador
  { path: 'admin/promociones/:promoId', component: AdmDetailPromoComponent, canActivate: [AuthGuard] },//Detalle de promo vista Administrador

  { path: 'admin/cotizaciones', component: AdmListCotizacionComponent, canActivate: [AuthGuard] },

  { path: 'admin/categorias', component: AdmListCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'admin/categoriasTr', component: AdmListCategoriasTrComponent, canActivate: [AuthGuard] },
  { path: 'admin/categorias/:idCategoria', component: AdmDetalleCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'admin/categoriasTr/:idCategoria', component: AdmDetalleCategoriaTrComponent, canActivate: [AuthGuard] },
  { path: 'admin/categorias/:idCategoria/productos/:productId', component: AdmDetalleProductoComponent, canActivate: [AuthGuard] },
  { path: 'admin/categoriasTr/:idCategoriaTr/trs/:productId', component: AdmDetalleProductoTrComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
