import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-adm-navbar',
  templateUrl: './adm-navbar.component.html',
  styleUrls: ['./adm-navbar.component.css']
})
export class AdmNavbarComponent implements OnInit {
  showFiller = false;
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name:"Home",route:"/admin"},
    {name:"Productos",route:"/admin/categorias"},
    {name:"Trabajos Realizados",route:"/admin/categoriasTr"},
    {name:"Promociones",route:"/admin/promociones"},
    {name:"Subscripciones",route:"/admin/subscribe"},
    {name:"Cotizaciones",route:"/admin/cotizaciones"},
    {name:"Pagina Web",route:""}
    
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router, private authenticationService: AuthenticationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/admin/Login']);
  }
  ngOnInit() {
  }

}
