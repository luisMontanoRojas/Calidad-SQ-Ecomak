import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditProductsComponent } from '../adm-edit-products/adm-edit-products.component';
import { ConstantsService } from 'src/app/Services/common/constants.service';

@Component({
  selector: 'app-adm-detalle-products',
  templateUrl: './adm-detalle-products.component.html',
  styleUrls: ['./adm-detalle-products.component.css']
})
export class AdmDetalleProductsComponent implements OnInit {

  producto:Product = new Product;
  categoriaId:string;
  api:string;
  constructor(private _constant:ConstantsService,public dialog: MatDialog,private productoService:ProductService, private router:  Router,
    @Inject(MAT_DIALOG_DATA ) public product:Product,public dialogRef:MatDialogRef<AdmDetalleProductsComponent>) 
    {
      this.api = this._constant.apiUrl;
    }
   ngOnInit() {

  }

  onClickCerrar(){
    this.dialogRef.close();
  }

  onDialogResponseEdit(productEdit:Product) {
    

    this.product=productEdit;
    this.product.categoryId=Number(this.categoriaId);
    
  }
  
  onEditForm(ProductToEdit: Product) {
    const dialogRefEdit = this.dialog.open(AdmEditProductsComponent, { data: ProductToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProduct => {
      if (EditedProduct) {
       this.onDialogResponseEdit(EditedProduct["data"]);
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


}
