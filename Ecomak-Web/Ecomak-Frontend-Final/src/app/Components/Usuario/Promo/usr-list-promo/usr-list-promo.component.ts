import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { PromoService } from 'src/app/Services/promo.service'
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import * as moment from 'moment';

@Component({
  selector: 'app-usr-list-promo',
  templateUrl: './usr-list-promo.component.html',
  styleUrls: ['./usr-list-promo.component.css']
})
export class UsrListPromoComponent implements OnInit {


  api:String;
  dataSource;
  data=[];

  constructor(private promoService: PromoService, private router:  Router, private _constant: ConstantsService) {
    this.api =this._constant.apiUrl;	
   }
  ngOnInit() {
    this.promoService.getPromos()
      .subscribe((data: Promo[]) => {
        this.data=data;
        var datafecha = this.setDates(data);
      });
  }
  setDates(data:Array<Promo>){
    for (let i =   0; i <  data.length; i++ ) {
      const element = data[i]; 
      element.iniDateUser = this.setfechacorrecta(element.iniDate);
      element.endDateUser = this.setfechacorrecta(element.endDate);
      
    }
      
    return data;
    
  }
  setfechacorrecta(DateUtc: Date) {
    var date = moment(DateUtc).locale("es").subtract(new Date().getTimezoneOffset()/60, 'hours');
    var hours = date.hours();
    var fechacorrecta = (date.subtract(hours, 'hours').format('LL'))
    return fechacorrecta
  }

  onVer(promo:Promo){
    this.promoService.promo=promo;
    this.router.navigateByUrl(`/promociones/${promo.id}`);
  }

}
