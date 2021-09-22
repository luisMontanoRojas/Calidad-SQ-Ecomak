import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private authService: AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authService.validateToken().subscribe(res => {
    }, err => {
      this.authService.logout()
      alert("La sesión expiro, ingresa nuevamente!");
    }
    );
  }

}
