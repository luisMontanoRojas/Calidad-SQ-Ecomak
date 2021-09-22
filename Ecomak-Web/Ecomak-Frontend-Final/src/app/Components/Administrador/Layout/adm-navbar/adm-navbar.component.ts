import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-adm-navbar',
  templateUrl: './adm-navbar.component.html',
  styleUrls: ['./adm-navbar.component.css']
})
export class AdmNavbarComponent implements OnInit {

  mobileQuery: MediaQueryList;
  sidenavWidth = 4;
  fillerNav = [
    {name:"Productos",route:"/admin/productos"},
    {name:"Trabajos Realizados",route:"/admin/trabajos-realizados"},
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
    this.router.navigate(['/login']);
  }
  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 4;
  }
  ngOnInit() {
  }

}
