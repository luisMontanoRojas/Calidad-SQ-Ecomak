import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UserPageNotFoundRoutingModule } from './user-page-not-found-routing.module';
import { UserPageNotFoundComponent} from './user-page-not-found.component';


@NgModule({
  declarations: [UserPageNotFoundComponent],
  imports: [
    CommonModule,
    UserPageNotFoundRoutingModule
  ]
})
export class UserPageNotFoundModule { }
