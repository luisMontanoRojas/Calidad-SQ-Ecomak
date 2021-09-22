import { Component, OnInit, Inject } from '@angular/core';
import { Commentary } from 'src/app/Models/Commentary';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CommentaryService } from 'src/app/Services/commentary.service';

@Component({
  selector: 'app-usr-add-commentary',
  templateUrl: './usr-add-commentary.component.html',
  styleUrls: ['./usr-add-commentary.component.css']
})
export class UsrAddCommentaryComponent implements OnInit {

  author: string;
  comment: string;

  time: Date;
  show: boolean;

  c: Commentary = new Commentary;


  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<UsrAddCommentaryComponent>,
    @Inject(MAT_DIALOG_DATA) public promotionId: number, private _snackBar: MatSnackBar,
    private commentaryService: CommentaryService) {
  }

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if ((this.author) && (this.comment)) {
      this.c.author = this.author;
      this.c.comment = this.comment;
      this.c.show = true;
      var today = new Date();
      this.c.time = today;
      this.c.promotionId = this.promotionId;
      this.commentaryService.addComment(this.promotionId.toString(), this.c).subscribe(s => {
        this.dialogRef.close({ data: s });
        this.openSnackBar("Creado Correctamente!!", "Aceptar");
      }, err => {
        console.log(err);
        this.openSnackBar("Error Al Crear", "Aceptar");
      });
    }
    else {
      this.openSnackBar("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
