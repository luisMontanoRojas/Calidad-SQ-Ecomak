import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { AdmAddSubscriptorComponent } from 'src/app/Components/Administrador/Subscripciones/adm-add-subscriptor/adm-add-subscriptor.component';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usr-footer',
  templateUrl: './usr-footer.component.html',
  styleUrls: ['./usr-footer.component.css']
})
export class UsrFooterComponent implements OnInit {

  
  dataSource;
  data;
  showSpinner = true;
  showError = false;

  constructor(private SuscribeService: SubscribeService,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddSubscriptorComponent, { width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
      err => {
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }


}
