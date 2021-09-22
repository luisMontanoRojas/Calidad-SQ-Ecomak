import { Component, OnInit } from '@angular/core';
import { CommentaryService } from 'src/app/Services/commentary.service';
import { PromoService } from 'src/app/Services/promo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Promo } from 'src/app/Models/Promo';
import { Commentary } from 'src/app/Models/Commentary';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UsrAddCommentaryComponent } from '../usr-add-commentary/usr-add-commentary.component';

@Component({
  selector: 'app-usr-list-commentary',
  templateUrl: './usr-list-commentary.component.html',
  styleUrls: ['./usr-list-commentary.component.css']
})
export class UsrListCommentaryComponent implements OnInit {

  promo: Promo = new Promo();
  comment:Commentary=new Commentary();
  commentaries:Commentary[];

  dateToComment;
  promoId;

  constructor(private commentaryService:CommentaryService,private promoService:PromoService, private route: ActivatedRoute, private router:  Router,
    public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.promoId = this.route.snapshot.paramMap.get("promoId");
    this.commentaryService.getComentaries(this.promoId.toString()).subscribe(commentaries=>{
      this.commentaries=commentaries;
    });

    this.dateToComment = this.comment.time;
  }

  openDialogAdd(){
    const dialogRef = this.dialog.open(UsrAddCommentaryComponent, { data:this.promoId ,width: "500px" });
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
