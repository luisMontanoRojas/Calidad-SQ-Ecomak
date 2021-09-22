import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Commentary } from '../../../../Models/Commentary';
import { Promo } from '../../../../Models/Promo';
import { CommentaryService } from '../../../../Services/commentary.service';
import { PromoService } from '../../../../Services/promo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-adm-item-comment',
  templateUrl: './adm-item-comment.component.html',
  styleUrls: ['./adm-item-comment.component.css']
})
export class AdmItemCommentComponent implements OnInit {

  dateToComment;
  commentaries:Commentary[];
  @Input() comment:Commentary;
  @Output() deleteComment: EventEmitter<Comment> = new EventEmitter();

  constructor(private commentaryService:CommentaryService, public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.dateToComment = this.comment.time;
  }

  setClasses() {
    let classes = {
    }
    return classes;
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
    this.deleteComment.emit(comment);
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

  onUpdate(comment:Commentary){
  }

}
