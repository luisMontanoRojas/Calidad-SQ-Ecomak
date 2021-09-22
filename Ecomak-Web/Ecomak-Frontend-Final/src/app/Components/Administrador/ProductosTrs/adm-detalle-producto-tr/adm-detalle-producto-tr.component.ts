import { Component, OnInit, Inject } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmEditProductosTrComponent } from '../adm-edit-productos-tr/adm-edit-productos-tr.component';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { ConstantsService } from 'src/app/Services/common/constants.service';

@Component({
  selector: 'app-adm-detalle-producto-tr',
  templateUrl: './adm-detalle-producto-tr.component.html',
  styleUrls: ['./adm-detalle-producto-tr.component.css']
})
export class AdmDetalleProductoTrComponent implements OnInit {
  producto:ProductTr = new ProductTr;
  categoriaId:string;
  api:string;
  constructor(private _constant:ConstantsService,public dialog: MatDialog,private productoService:ProductTrService, private router:  Router,
    @Inject(MAT_DIALOG_DATA ) public productTr:ProductTr,public dialogRef:MatDialogRef<AdmDetalleProductoTrComponent>) {
      this.api = this._constant.apiUrl;
    }
   ngOnInit() {

  }

  onClickCerrar(){
    this.dialogRef.close();
  }

  onDialogResponseEdit(productEdit:ProductTr) {
    

    this.productTr=productEdit;
    this.productTr.categoryId=Number(this.categoriaId);
    
  }
  
  onEditForm(ProductTrToEdit: ProductTr) {
    const dialogRefEdit = this.dialog.open(AdmEditProductosTrComponent, { data: ProductTrToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedProductTr => {
      if (EditedProductTr) {
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
    this.productoService.deleteProductTr(this.producto).subscribe(p=>{
      this.router.navigateByUrl(`/admin/categoriasTr/${this.producto.categoryId}`);
    });
  }
  public createImgPath = (serverPath: string) => {
    return `/${serverPath}`;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }

}
