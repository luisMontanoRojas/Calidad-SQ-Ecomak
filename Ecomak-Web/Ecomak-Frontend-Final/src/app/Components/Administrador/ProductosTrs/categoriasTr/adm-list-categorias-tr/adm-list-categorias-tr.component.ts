import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { CategoryTrService } from 'src/app/Services/category-tr.service';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmAddCategoriaComponent } from '../../../Compartidos/adm-add-categoria/adm-add-categoria.component';
import { AdmEditCategoriaComponent } from '../../../Compartidos/adm-edit-categoria/adm-edit-categoria.component';

@Component({
  selector: 'app-adm-list-categorias-tr',
  templateUrl: './adm-list-categorias-tr.component.html',
  styleUrls: ['./adm-list-categorias-tr.component.css']
})
export class AdmListCategoriasTrComponent implements OnInit {
  categorys: Category[];
  Listcategory: Number;
  showSpinner = true;
  showError = false;
  
  c: Category = new Category;
  categoryEdit: Category = new Category;
  constructor(public dialog: MatDialog, private categoryService: CategoryTrService, private router: Router, private _snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['#', 'Nombre', 'Cantidad de Productos','Cantidad de Trabajos Realizados','Opciones'];
  dataSource;
  data;
  ngOnInit() {
    this.categoryService.getCategorysForTr()
    .subscribe((data: Category[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource(data);
      this.showSpinner = false;
    }, err => {
      console.log(err);
      this.showSpinner = false;
      this.showError = true;
    });
  }

  deleteCategory(category: Category) {
    this.categorys = this.categorys.filter(e => e.id !== category.id);
    this.categoryService.deleteCategoryTr(category).subscribe();
  }
  openDialog(idCategory: number): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Categoria";
    dialog.mensaje = "Esta seguro que desea elimidar la Categoria?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, {
      height: 'auto',
      width: 'auto', data: dialog
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete(idCategory);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addCategory(category: Category) {
    this.categoryService.categoryTradd(category).subscribe(category => {
      this.categorys.push(category);
    });
  }
  onDelete(id:number)
  {
    this.c.id=id;
    this.categoryService.deleteCategoryTr(this.c).subscribe(res=>{
      if(res)
      {
        this.dataSource.data=this.dataSource.data.filter(e => e.id !==id);
        this.data=this.data.filter(e => e.id !==id);
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
  onOptions(id: number) {
    this.router.navigateByUrl(`/admin/trabajos-realizados/${id}`);
  }
  onEditForm(CategoryToEdit: Category) {
    const dialogRefEdit = this.dialog.open(AdmEditCategoriaComponent, { data: CategoryToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedCategory => {
      if (EditedCategory) {
        this.onDialogResponseEdit(EditedCategory["data"]);
      }
    });
  }
  openSn
  onDialogResponseEdit(subscribeEdit: Category) {
    this.data.find(s => s.id == subscribeEdit.id).name = subscribeEdit.name;
    this.data.find(s => s.id == subscribeEdit.id).productsSize = subscribeEdit.productsSize;
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddCategoriaComponent, { width: "500px" });
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
