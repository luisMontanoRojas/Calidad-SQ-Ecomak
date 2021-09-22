import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './administrador.component';
import { AdmHomePageComponent } from '../PaginasEstaticas/adm-home-page/adm-home-page.component';


const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      {
        path: '',
        component: AdmHomePageComponent
      },
      {
        path: 'productos', loadChildren: () =>
          import('../Productos/productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path: 'promociones', loadChildren: () =>
          import('../Promo/promo/promo.module').then(m => m.PromoModule)
      },
      {
        path: 'trabajos-realizados',
        loadChildren: () => import('../ProductosTrs/productos-trs/productos-trs.module').then(m => m.ProductosTrsModule)
      },
      {
        path: 'subscribe',
        loadChildren: () => import('../Subscripciones/subscripciones/subscripciones.module').then(m => m.SubscripcionesModule)
      },
      {
        path: 'cotizaciones',
        loadChildren: () => import('../Cotizaciones/cotizaciones/cotizaciones.module').then(m => m.CotizacionesModule)
      }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
