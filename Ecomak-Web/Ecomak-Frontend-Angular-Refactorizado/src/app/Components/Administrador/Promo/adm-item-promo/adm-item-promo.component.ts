import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Promo } from '../../../../Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-item-promo',
  templateUrl: './adm-item-promo.component.html',
  styleUrls: ['./adm-item-promo.component.css']
})
export class AdmItemPromoComponent implements OnInit {

  @Input() promo: Promo;
  valueIni: string;
  valueEnd: string;
  @Output() deletePromo: EventEmitter<Promo> = new EventEmitter();

  constructor(private promoService:PromoService, private router:  Router)
  { 
  }

  ngOnInit() {
    this.valueIni = this.promo.iniDate.toString().split("T",1)[0];
    this.valueEnd = this.promo.endDate.toString().split("T",1)[0];
  }

  setClasses() {
    let classes = {
    }
    return classes;
  }

  onDelete(promo) {
    this.deletePromo.emit(promo);
  }

  onDetail(promo:Promo){
    this.router.navigateByUrl(`admin/Detail_Promo/${promo.id}`);
  }

  onUpdate(promo:Promo){
    this.router.navigateByUrl(`admin/Edit_Promo/${promo.id}`);
  }

}
