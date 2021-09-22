import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsrHomePageComponent } from '../PaginasEstaticas/usr-home-page/usr-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        component: UsrHomePageComponent
      },
      {
        path: 'quienes-somos', loadChildren: () =>
          import('../PaginasEstaticas/usr-quienes-somos/usr-quienes-somos.module').then(m => m.UsrQuienesSomosModule)
      },
      {
        path: 'productos', loadChildren: () =>
          import('../Productos/productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path: 'trabajos-realizados', loadChildren: () =>
          import('../Trs/trs/trs.module').then(m => m.TrsModule)
      },
      { 
        path: 'promociones', loadChildren: () => 
          import('../Promo/promo/promo.module').then(m => m.PromoModule) 
      },
      {
         path: 'contacto', loadChildren: () =>
          import('../PaginasEstaticas/contacto/contacto.module').then(m => m.ContactoModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
