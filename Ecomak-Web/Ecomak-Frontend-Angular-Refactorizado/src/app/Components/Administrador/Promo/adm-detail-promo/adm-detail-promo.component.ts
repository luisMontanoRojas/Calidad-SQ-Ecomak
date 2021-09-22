import { Component, OnInit } from '@angular/core';
import { Promo } from '../../../../Models/Promo';
import { ActivatedRoute } from '@angular/router';
import { PromoService } from 'src/app/Services/promo.service';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { AdmEditPromoComponent } from '../adm-edit-promo/adm-edit-promo.component';

@Component({
  selector: 'app-adm-detail-promo',
  templateUrl: './adm-detail-promo.component.html',
  styleUrls: ['./adm-detail-promo.component.css']
})
export class AdmDetailPromoComponent implements OnInit {
  promo:Promo = new Promo;
  valueIni: string;
  valueEnd: string;

  constructor(private promoService:PromoService, private route: ActivatedRoute, private router:  Router, public dialog: MatDialog) {
   }

   ngOnInit() {
    const promoId = this.route.snapshot.paramMap.get("promoId");
    this.promo.id = Number(promoId);
    this.promoService.getPromo(promoId).subscribe(e => { 
      this.promo = e;
      this.valueIni = this.promo.iniDate.toString().split("T",1)[0];
      this.valueEnd = this.promo.endDate.toString().split("T",1)[0];
    });   
  }

  openDialog(): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Promocion";
    dialog.mensaje="Esta seguro que desea eliminar la promocion?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, {data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete();
      }
    })
  }

  onDialogResponseEdit(promoEdit:Promo) {
    this.promo=promoEdit;
  }
  onEditForm(PromoToEdit: Promo) {
    const dialogRefEdit = this.dialog.open(AdmEditPromoComponent, { data: PromoToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedPromo => {
      if (EditedPromo) {
       this.onDialogResponseEdit(EditedPromo["data"]);
      }
    });
  }

  onDelete(){
    this.promoService.deletePromo(this.promo).subscribe(p=>{
      this.router.navigateByUrl(`/admin/promociones`);
    });
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }

}
