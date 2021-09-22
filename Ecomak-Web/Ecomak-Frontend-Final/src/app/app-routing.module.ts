import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './helpers/Guards/auth.guard'
import { AdmLoginComponent } from './Components/Administrador/PaginasEstaticas/adm-login/adm-login.component';



const routes: Routes = [
  { path: '', loadChildren: () => 
  import('./Components/Usuario/usuario/usuario.module').then(m => m.UsuarioModule) }, 
  { path: 'login', loadChildren: () => import('./Components/Administrador/PaginasEstaticas/adm-login/adm-login.module').then(m => m.AdmLoginModule) },
  { path: 'admin',canActivateChild:[AuthGuard],loadChildren: () => 
  import('./Components/Administrador/administrador/administrador.module').then(m => m.AdministradorModule) 
  },
  { 
    path: '**', loadChildren: () => 
      import('./Components/Usuario/PaginasEstaticas/user-page-not-found/user-page-not-found.module').then(m => m.UserPageNotFoundModule) 
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }