import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';

@Component({
  selector: 'app-adm-confirm-dialog',
  templateUrl: './adm-confirm-dialog.component.html',
  styleUrls: ['./adm-confirm-dialog.component.css']
})
export class AdmConfirmDialogComponent implements OnInit {

  constructor( 
    public dialogRef:MatDialogRef<AdmConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA ) public dialogo:Dialog) { }

  ngOnInit() {
  }
  onClickNo():void{
    this.dialogRef.close();
  }


}