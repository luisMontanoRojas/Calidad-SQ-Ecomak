import { Component, OnInit, Input } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { ActivatedRoute } from '@angular/router';
import { PromoService } from 'src/app/Services/promo.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UsrDialogImageComponent } from '../../PaginasEstaticas/usr-dialog-image/usr-dialog-image.component';

@Component({
  selector: 'app-usr-detail-promo',
  templateUrl: './usr-detail-promo.component.html',
  styleUrls: ['./usr-detail-promo.component.css']
})
export class UsrDetailPromoComponent implements OnInit {
  promo:Promo;
  valueIni: string;
  valueEnd: string;
  data:any;

  constructor(public dialog: MatDialog,private promoService:PromoService, private route: ActivatedRoute, private router:  Router) {
    this.promo=new Promo;
   }

  ngOnInit() {
    

    const promoId = this.route.snapshot.paramMap.get("promoId");
    this.promoService.getPromo(promoId).subscribe(e => {
      this.promo = e;
      this.valueIni = this.promo.iniDate.toString().split("T",1)[0];
      this.valueEnd = this.promo.endDate.toString().split("T",1)[0];
      this.data = {"title":this.promo.tittle,"img":`http://localhost:50455/a/${this.promo.image}`};
    });   
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }
  openDialog(i:any): void {

    const dialogRef = this.dialog.open(UsrDialogImageComponent, {
      height: 'auto',
      width: 'auto', data:i 
    });
  }

}
