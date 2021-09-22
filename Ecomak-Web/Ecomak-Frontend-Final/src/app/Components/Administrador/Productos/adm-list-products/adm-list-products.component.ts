import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditProductsComponent } from '../adm-edit-products/adm-edit-products.component';
import { AdmAddProductsComponent } from '../adm-add-products/adm-add-products.component';
import { AdmDetalleProductsComponent } from '../adm-detalle-products/adm-detalle-products.component';
import { ConstantsService } from 'src/app/Services/common/constants.service';

@Component({
  selector: 'app-adm-list-products',
  templateUrl: './adm-list-products.component.html',
  styleUrls: ['./adm-list-products.component.css']
})
export class AdmListProductsComponent implements OnInit {
  products: Product[] = new Array;
  @Input() idCategoria: number;
  constructor(public dialog: MatDialog, private productService: ProductService,
    private router: Router, private _snackBar: MatSnackBar, private comionnService:ConstantsService) { }

    displayedColumns: string[] = ['#', 'Tipo', 'Tela', 'Diseño','Imagen','Opciones'];
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

  onDialogResponseEdit(productEdit:Product) {
    this.data.find(s => s.id == productEdit.id).type = productEdit.type;
    this.data.find(s => s.id == productEdit.id).fabric = productEdit.fabric;
    this.data.find(s => s.id == productEdit.id).design = productEdit.design;
    this.data.find(s => s.id == productEdit.id).quantity = productEdit.quantity;
    this.data.find(s => s.id == productEdit.id).size = productEdit.size;
    this.data.find(s => s.id == productEdit.id).photo = productEdit.photo;
    this.data.find(s => s.id == productEdit.id).handle = productEdit.handle;
    this.data.find(s => s.id == productEdit.id).categoryId = this.idCategoria;
    
  }

  onEditForm(ProductToEdit: Product) {
    const dialogRefEdit = this.dialog.open(AdmEditProductsComponent, { data: ProductToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProduct => {
      if (EditedProduct) {
        this.onDialogResponseEdit(EditedProduct["data"]);
      }
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddProductsComponent, { data: this.idCategoria, width: "500px" });
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
    this.data = this.data.filter(e => e.id !== product.id);

    product.categoryId = this.idCategoria;
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
    const dialogRef = this.dialog.open(AdmDetalleProductsComponent, { data: product,width:"400px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  public createImgPath = (serverPath: string) => {
    var api=this.comionnService.apiUrl;
    return `${api}${serverPath}`;
  }



}
