import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usr-item-promo',
  templateUrl: './usr-item-promo.component.html',
  styleUrls: ['./usr-item-promo.component.css']
})
export class UsrItemPromoComponent implements OnInit {

  @Input() promo:Promo;
  @Output() deletePromo:EventEmitter<Promo> = new EventEmitter();
  constructor(private PromoService:PromoService, private router:  Router) { }

  ngOnInit() {
  }
  onVer(promo:Promo){
    this.router.navigateByUrl(`/promos/${promo.id}`);

  }
  
  onDelete(promo){
    this.deletePromo.emit(promo);
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }

}
