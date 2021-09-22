import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Models/Quote';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { QuoteService } from 'src/app/Services/quote.service';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmDetalleCotizacionComponent } from '../adm-detalle-cotizacion/adm-detalle-cotizacion.component';
import { ConstantsService } from 'src/app/Services/common/constants.service';


@Component({
  selector: 'app-adm-list-cotizacion',
  templateUrl: './adm-list-cotizacion.component.html',
  styleUrls: ['./adm-list-cotizacion.component.css']
})
export class AdmListCotizacionComponent implements OnInit {

  quotes: Quote[];
  displayedColumns: string[] = ['#', 'Nombre', 'Email', 'Telefono', 'Empresa', 'Logo', 'Opciones'];
  dataSource;
  data: Quote[];
  api: String;
  showSpinner = true;
  showError = false;

  constructor(public dialog: MatDialog, private quoteService: QuoteService, private _snackBar: MatSnackBar, private _constant: ConstantsService) {
    this.api = this._constant.apiUrl;
  }

  ngOnInit() {
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
        this.showSpinner = false;
      }, err => {
        console.log(err);
        this.showSpinner = false;
        this.showError = true;
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteQuote(quote: Quote) {
    this.quoteService.deleteQuote(quote.id).subscribe(res => {
      if (res) {
        this.data = this.data.filter(q => q.id != quote.id);
        this.dataSource.data = this.dataSource.data.filter(q => q.id != quote.id);
        this.openSnackBar("Eliminado correctamente", "Aceptar");
      }
    }, err => {
      console.log("ERROR, No se elimino", err);
      this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
    });
  }

  openDialog(quote: Quote): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Cotizacion";
    dialog.mensaje = "Esta seguro que desea elimidar la Cotizacion ?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, {
      height: 'auto',
      width: 'auto', data: dialog
    });
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

  openDialogDetalle(quote: Quote) {
    const dialogRef = this.dialog.open(AdmDetalleCotizacionComponent, { data: quote, width: "400px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

}
