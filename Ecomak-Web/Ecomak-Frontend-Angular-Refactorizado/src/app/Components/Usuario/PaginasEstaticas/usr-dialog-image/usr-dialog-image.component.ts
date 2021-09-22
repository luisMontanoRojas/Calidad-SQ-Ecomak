import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-usr-dialog-image',
  templateUrl: './usr-dialog-image.component.html',
  styleUrls: ['./usr-dialog-image.component.css']
})
export class UsrDialogImageComponent implements OnInit {

  constructor( 
    public dialogRef:MatDialogRef<UsrDialogImageComponent>,
    @Inject(MAT_DIALOG_DATA ) public images:{}) { }

  ngOnInit() {
   
  }
  onClickNo():void{
    this.dialogRef.close();
  }
}
