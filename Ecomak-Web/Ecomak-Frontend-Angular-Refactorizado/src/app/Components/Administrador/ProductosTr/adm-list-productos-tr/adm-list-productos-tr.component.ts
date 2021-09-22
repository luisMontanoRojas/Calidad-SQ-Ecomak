import { Component, OnInit, Input } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import * as $ from 'jquery';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditProductosTrComponent } from '../adm-edit-productos-tr/adm-edit-productos-tr.component';
import { AdmAddProductosTrComponent } from '../adm-add-productos-tr/adm-add-productos-tr.component';
import { AdmDetalleProductoTrComponent } from '../adm-detalle-producto-tr/adm-detalle-producto-tr.component';


@Component({
  selector: 'app-adm-list-productos-tr',
  templateUrl: './adm-list-productos-tr.component.html',
  styleUrls: ['./adm-list-productos-tr.component.css']
})
export class AdmListProductosTrComponent implements OnInit {

  products:ProductTr[]=new Array;
  p :ProductTr=new ProductTr;
  productEdit:ProductTr=new ProductTr;
  
@Input() idCategoria:number;
  constructor(public dialog: MatDialog,private productService: ProductTrService,private route: ActivatedRoute, private router:  Router,  private _snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['#', 'Nombre', 'Precio', 'Imagen', 'Opciones'];
  data;
  dataSource;
  ngOnInit() {
    this.productService.getProductsTr(this.idCategoria)
      .subscribe((data: ProductTr[]) => {
        data.forEach(element => {
          element.categoryId=this.idCategoria;
        });
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }
  openDialog(product:ProductTr): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Producto";
    dialog.mensaje="Esta seguro que desea elimidar el Producto?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { height: 'auto',
    width: 'auto', data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.onDelete(product);
      }

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDelete(product:ProductTr){
    this.dataSource.data=this.dataSource.data.filter(e => e.idTr !== product.idTr);
    product.categoryId=this.idCategoria;
    this.productService.deleteProductTr(product).subscribe();
  }
  onDialogResponseEdit(productEdit:ProductTr) {
    this.data.find(s => s.idTr == productEdit.idTr).nameTr = productEdit.nameTr;
    this.data.find(s => s.idTr == productEdit.idTr).priceTr = productEdit.priceTr;
    this.data.find(s => s.idTr == productEdit.idTr).quantityTr = productEdit.quantityTr;
    this.data.find(s => s.idTr == productEdit.idTr).photoTr = productEdit.photoTr;
    this.data.find(s => s.idTr == productEdit.idTr).stateTr = productEdit.stateTr;
    this.data.find(s => s.idTr == productEdit.idTr).categoryId = this.idCategoria;
    
  }
  onEditForm(ProductTrToEdit: ProductTr) {
    const dialogRefEdit = this.dialog.open(AdmEditProductosTrComponent, { data: ProductTrToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProductTr => {
      if (EditedProductTr) {
        this.onDialogResponseEdit(EditedProductTr["data"]);
      }
    });
  }
  openDialogDetalle(productTr:ProductTr){
    const dialogRef = this.dialog.open(AdmDetalleProductoTrComponent, { data: productTr,width:"400px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  addProduct(product:ProductTr){
    this.productService.productTradd(product).subscribe(product => {
      this.products.push(product);
    });
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddProductosTrComponent, { data: this.idCategoria, width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.data.push(res["data"]);
        this.dataSource = new MatTableDataSource(this.data);
      }
      err=>{
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }

}
