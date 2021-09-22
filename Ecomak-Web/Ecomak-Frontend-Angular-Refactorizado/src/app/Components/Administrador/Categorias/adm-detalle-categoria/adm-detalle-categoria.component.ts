import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AdmEditCategoriaComponent } from '../adm-edit-categoria/adm-edit-categoria.component';

@Component({
  selector: 'app-adm-detalle-categoria',
  templateUrl: './adm-detalle-categoria.component.html',
  styleUrls: ['./adm-detalle-categoria.component.css']
})
export class AdmDetalleCategoriaComponent implements OnInit {
  category : Category =new Category;
  constructor(public dialog: MatDialog,private categoryService: CategoryService,private route: ActivatedRoute, private router:  Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
   
    const idCategoria = this.route.snapshot.paramMap.get("idCategoria");
    this.category.id=Number(idCategoria);
    this.categoryService.getCategory(idCategoria).subscribe( category=>{
      this.category = category;
    });
  }
 
  onDialogResponseEdit(categoryEdit:Category) {
    this.category=categoryEdit;
  }
  onEditForm(CategoryToEdit: Category) {
    const dialogRefEdit = this.dialog.open(AdmEditCategoriaComponent, { data: CategoryToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedCategory => {
      if (EditedCategory) {
       this.onDialogResponseEdit(EditedCategory["data"]);
      }
    });
  }
  openDialog(): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Categoria";
    dialog.mensaje="Esta seguro que desea elimidar la categoria?";
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
    this.categoryService.deleteCategory(this.category).subscribe(res=>{
      if(res)
      {
        this.router.navigateByUrl(`/admin/categorias`);
        this.openSnackBar("Eliminado correctamente","Aceptar");
      }
    },err=>{
      console.log("ERROR, No se elimino",err);
      this.openSnackBar("Error, No se pudo eliminar","Aceptar");
      
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
