import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { UserPageNotFoundComponent } from './user-page-not-found.component';



const routes: Routes = [{ path: '', component: UserPageNotFoundComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageNotFoundRoutingModule { }
