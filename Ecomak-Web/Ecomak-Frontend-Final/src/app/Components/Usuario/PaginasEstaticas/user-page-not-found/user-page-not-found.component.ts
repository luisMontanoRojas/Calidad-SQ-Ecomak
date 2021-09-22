import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-page-not-found',
  templateUrl: './user-page-not-found.component.html',
  styleUrls: ['./user-page-not-found.component.css']
})
export class UserPageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {    
      this.router.navigate(["/"])
    }, 5000);

    // setTimeout(function() { alert("sera redireccionado a la"); }, 10000);
  }





}
