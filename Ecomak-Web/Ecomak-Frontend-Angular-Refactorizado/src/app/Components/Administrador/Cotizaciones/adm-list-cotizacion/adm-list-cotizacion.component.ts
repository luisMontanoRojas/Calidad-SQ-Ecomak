import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Models/Quote';
import { QuoteService } from 'src/app/Services/quote.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from 'src/app/Components/Administrador/PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmDetalleCotizacionComponent } from 'src/app/Components/Administrador/Cotizaciones/adm-detalle-cotizacion/adm-detalle-cotizacion.component';

@Component({
  selector: 'app-adm-list-cotizacion',
  templateUrl: './adm-list-cotizacion.component.html',
  styleUrls: ['./adm-list-cotizacion.component.css']
})
export class AdmListCotizacionComponent implements OnInit {

  quotes:Quote[];

  constructor(public dialog: MatDialog, private quoteService:QuoteService,  private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['#', 'Nombre', 'Correo','Telefono','Empresa','Logo','Opciones'];
  dataSource;
  data;
  ngOnInit() {
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  deleteQuote(quote:Quote){
    
    this.quoteService.deleteQuote(quote.id).subscribe(res => {
      if (res) {
        this.dataSource.data=this.dataSource.data.filter(q=>q.id!=quote.id);
        this.openSnackBar("Eliminado correctamente", "Aceptar");
      }
    }, err => {
      console.log("ERROR, No se elimino", err);
      this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
    });
  }
  openDialog(quote:Quote): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Cotizacion";
    dialog.mensaje="Esta seguro que desea elimidar la Cotizacion ?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { height: 'auto',
    width: 'auto', data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.deleteQuote(quote);
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialogDetalle(quote:Quote){
    const dialogRef = this.dialog.open(AdmDetalleCotizacionComponent, { data: quote,width:"500px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }

}
