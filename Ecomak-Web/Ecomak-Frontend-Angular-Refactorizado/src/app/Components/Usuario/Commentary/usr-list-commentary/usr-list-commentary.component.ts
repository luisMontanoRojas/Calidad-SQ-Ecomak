import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Commentary } from '../../../../Models/Commentary';
import { Promo } from '../../../../Models/Promo';
import { CommentaryService } from '../../../../Services/commentary.service';
import { PromoService } from '../../../../Services/promo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { UsrAddCommentaryComponent } from '../usr-add-commentary/usr-add-commentary.component';

@Component({
  selector: 'app-usr-list-commentary',
  templateUrl: './usr-list-commentary.component.html',
  styleUrls: ['./usr-list-commentary.component.css']
})
export class UsrListCommentaryComponent implements OnInit {

  promo: Promo;
  commentaries:Commentary[];

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
    });
  }

  deleteComment(comment:Commentary){
    this.commentaries = this.commentaries.filter(c => c.id !== comment.id);
    this.commentaryService.deleteComment(comment.promotionId.toString(),comment).subscribe();
  }

  openDialogAdd(){
    const dialogRef = this.dialog.open(UsrAddCommentaryComponent, { data:this.promo.id ,width: "500px" });
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
