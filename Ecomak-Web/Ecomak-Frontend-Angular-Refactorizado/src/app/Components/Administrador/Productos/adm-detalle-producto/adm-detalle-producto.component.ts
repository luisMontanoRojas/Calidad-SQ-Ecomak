import { Component, OnInit, ɵConsole, Inject } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import * as $ from 'jquery';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditProductosComponent } from '../adm-edit-productos/adm-edit-productos.component';

@Component({
  selector: 'app-adm-detalle-producto',
  templateUrl: './adm-detalle-producto.component.html',
  styleUrls: ['./adm-detalle-producto.component.css']
})
export class AdmDetalleProductoComponent implements OnInit {
  producto:Product = new Product;


  categoriaId:string;
  productEdit:Product= new Product;
  constructor(public dialog: MatDialog,private productoService:ProductService, private route: ActivatedRoute, private router:  Router,
    @Inject(MAT_DIALOG_DATA ) public product:Product,public dialogRef:MatDialogRef<AdmDetalleProductoComponent>) {
   }

   ngOnInit() {
    const productoId = this.route.snapshot.paramMap.get("productId");
    this.categoriaId=this.route.snapshot.paramMap.get("idCategoria");
    this.producto.id = Number(productoId);
    this.productoService.getProduct(this.categoriaId,productoId).subscribe(e => { 
      this.producto = e;
      this.producto.categoryId=Number(this.categoriaId);
    });   

  }
  onClickCerrar(){
    this.dialogRef.close();
  }
  onDialogResponseEdit(productEdit:Product) {
    this.product=productEdit;
    this.product.categoryId=Number(this.categoriaId);
  }
  
  onEditForm(ProductTrToEdit: Product) {
    const dialogRefEdit = this.dialog.open(AdmEditProductosComponent, { data: ProductTrToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProductTr => {
      if (EditedProductTr) {
        console.log(EditedProductTr["data"]);
       this.onDialogResponseEdit(EditedProductTr["data"]);
      }
    });
  }
    
    openDialog(): void {
      let dialog:Dialog=new Dialog;
      dialog.titulo="Eliminar Producto";
      dialog.mensaje="Esta seguro que desea elimidar el producto?";
      dialog.btnSi="Si";
      dialog.btnNo="Cancelar";
      const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { data: dialog });
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          this.onDelete();
        }
  
      })
    }

  onDelete(){
    this.productoService.deleteProduct(this.producto).subscribe(p=>{
      this.router.navigateByUrl(`/admin/categorias/${this.producto.categoryId}`);
    });
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }


}
