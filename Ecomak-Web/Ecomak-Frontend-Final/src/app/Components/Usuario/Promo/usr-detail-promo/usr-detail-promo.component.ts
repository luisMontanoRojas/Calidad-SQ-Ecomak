import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import * as moment from 'moment';

@Component({
  selector: 'app-usr-detail-promo',
  templateUrl: './usr-detail-promo.component.html',
  styleUrls: ['./usr-detail-promo.component.css']
})
export class UsrDetailPromoComponent implements OnInit {

  promo: Promo;
  valueIni: string;
  valueEnd: string;
  api:string;

  constructor(private promoService: PromoService, private route: ActivatedRoute, private router: Router, private _constant: ConstantsService) {
    this.promo = new Promo;
    this.api =this._constant.apiUrl;
  }

  ngOnInit() {
    this.promo = this.promoService.promo;
    if (this.promo.id == undefined) {
      const promoId = this.route.snapshot.paramMap.get("promoId");
      this.promoService.getPromo(promoId).subscribe(e => {
        this.promo = e;
        this.valueIni=this.setfechacorrectaini(this.promo.iniDate).toString();
      this.valueEnd=this.setfechacorrectaend(this.promo.endDate).toString();
      });
    }
    else{
      
      this.valueIni=this.setfechacorrectaini(this.promo.iniDate).toString();
      this.valueEnd=this.setfechacorrectaend(this.promo.endDate).toString();
    }
  }
  setfechacorrectaini(DateUtc: Date) {
    var date = moment(DateUtc).locale("es").subtract(new Date().getTimezoneOffset() / 60, 'hours');
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }
  setfechacorrectaend(DateUtc: Date) {
    var date = moment(DateUtc).locale("es");
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }

}
