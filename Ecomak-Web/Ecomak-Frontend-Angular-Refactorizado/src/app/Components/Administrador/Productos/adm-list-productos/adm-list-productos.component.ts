import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditProductosComponent } from '../adm-edit-productos/adm-edit-productos.component';
import { AdmAddProductosComponent } from '../adm-add-productos/adm-add-productos.component';
import { AdmDetalleProductoComponent } from '../adm-detalle-producto/adm-detalle-producto.component';

@Component({
  selector: 'app-adm-list-productos',
  templateUrl: './adm-list-productos.component.html',
  styleUrls: ['./adm-list-productos.component.css']
})
export class AdmListProductosComponent implements OnInit {
  products: Product[] = new Array;
  @Input() idCategoria: number;
  constructor(public dialog: MatDialog, private productService: ProductService,
    private router: Router, private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['#', 'Nombre', 'Precio', 'Imagen', 'Opciones'];
  data;
  dataSource;


  ngOnInit() {
    this.productService.getProducts(this.idCategoria)
      .subscribe((data: Product[]) => {
        data.forEach(element => {
          element.categoryId = this.idCategoria;
        })
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }

  onDialogResponseEdit(ProductEdit: Product) {
    this.data.find(s => s.id == ProductEdit.id).name = ProductEdit.name;
    this.data.find(s => s.id == ProductEdit.id).quantity = ProductEdit.quantity;
    this.data.find(s => s.id == ProductEdit.id).price = ProductEdit.price;
    this.data.find(s => s.id == ProductEdit.id).photo = ProductEdit.photo;
    this.data.find(s => s.id == ProductEdit.id).state = ProductEdit.state;
  }

  onEditForm(ProductToEdit: Product) {
    const dialogRefEdit = this.dialog.open(AdmEditProductosComponent, { data: ProductToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProduct => {
      if (EditedProduct) {
        this.onDialogResponseEdit(EditedProduct["data"]);
      }
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddProductosComponent, { data: this.idCategoria, width: "500px" });
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

  openDialog(product: Product): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Producto";
    dialog.mensaje = "Esta seguro que desea elimidar el Producto?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, {
      height: 'auto',
      width: 'auto', data: dialog
    });
    dialogRef.afterClosed().subscribe(res => {
      (res);
      if (res) {
        this.onDelete(product);
      }

    })
  }

  onDelete(product: Product) {
    this.dataSource.data = this.dataSource.data.filter(e => e.id !== product.id);
    product.categoryId = this.idCategoria; // PARCHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    this.productService.deleteProduct(product).subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogDetalle(product:Product){
    const dialogRef = this.dialog.open(AdmDetalleProductoComponent, { data: product,width:"400px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }



}
