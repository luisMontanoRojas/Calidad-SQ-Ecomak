import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AdmAddSubscriptorComponent } from 'src/app/Components/Administrador/Subscripciones/adm-add-subscriptor/adm-add-subscriptor.component';

@Component({
  selector: 'app-usr-footer',
  templateUrl: './usr-footer.component.html',
  styleUrls: ['./usr-footer.component.css']
})
export class UsrFooterComponent implements OnInit {

  
  email:string;
  c: Subscribe = new Subscribe;
  data;
  dataSource;

  @Output() Suscribeadd: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog, private subscribeservice: SubscribeService, private router: Router, private _snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  onSubmit() {
    this.c.email=this.email;
    this.subscribeservice.Subscribeadd(this.c).subscribe(
      Suscribe => {
        location.reload();
      });

  }
  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddSubscriptorComponent, { width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
     
    })
  }
}
