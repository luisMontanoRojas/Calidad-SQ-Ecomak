import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { Commentary } from 'src/app/Models/Commentary';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommentaryService } from 'src/app/Services/commentary.service';
import { PromoService } from 'src/app/Services/promo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmAddCommentComponent } from '../adm-add-comment/adm-add-comment.component';

@Component({
  selector: 'app-adm-list-comment',
  templateUrl: './adm-list-comment.component.html',
  styleUrls: ['./adm-list-comment.component.css']
})
export class AdmListCommentComponent implements OnInit {

  promo: Promo;
  commentaries:Commentary[]=new Array;
  

  constructor(public dialog: MatDialog, private commentaryService:CommentaryService,private promoService:PromoService, private route: ActivatedRoute, private router:  Router
    , private _snackBar: MatSnackBar) { 
    this.promo=new Promo;
  }

  ngOnInit() {
    const promoId = this.route.snapshot.paramMap.get("promoId");
    this.promoService.getPromo(promoId).subscribe(e => {
      this.promo = e;
    });
    this.commentaryService.getComentaries(promoId.toString()).subscribe(commentaries=>{
      this.commentaries=commentaries;
      commentaries.forEach(element => {
        element.promotionId = Number(promoId);
      });
    });
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogAdd(){
    const dialogRef = this.dialog.open(AdmAddCommentComponent, { data:this.promo.id ,width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.commentaries.push(res["data"]);      
      }
      err=>{
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }

  openDialog(comment:Commentary): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Comentario";
    dialog.mensaje="Esta seguro que desea eliminar el comentario?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { height: 'auto',
    width: 'auto', data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete(comment);
      }
    })
  }

  onDelete(comment) {
    this.commentaryService.deleteComment(comment.promotionId.toString(),comment).subscribe(res=>{
      if (res){
        this.commentaries = this.commentaries.filter(c => c.id !== comment.id);
        this.openSnackBar("Eliminado correctamente", "Aceptar");
      }
    },err => {
      console.log("ERROR, No se elimino", err);
      this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
    });
  }

  onEsconder(comment:Commentary){
    if(comment.show){
      comment.show=false;
    }
    else{
      comment.show=true;
    }
    this.commentaryService.editComment(comment).subscribe();
  }

}
