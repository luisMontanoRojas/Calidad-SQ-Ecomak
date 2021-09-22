import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';

@Component({
  selector: 'app-usr-list-promo',
  templateUrl: './usr-list-promo.component.html',
  styleUrls: ['./usr-list-promo.component.css']
})
export class UsrListPromoComponent implements OnInit {

  promos:Promo[];
  constructor(private PromoService: PromoService) { }

  ngOnInit() {
    this.PromoService.getPromos().subscribe( promos=>{
      this.promos = promos;
    });
  }

}
