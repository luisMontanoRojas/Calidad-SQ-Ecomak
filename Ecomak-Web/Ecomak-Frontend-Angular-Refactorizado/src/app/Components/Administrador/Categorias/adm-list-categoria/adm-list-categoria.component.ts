import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { AdmEditCategoriaComponent } from '../adm-edit-categoria/adm-edit-categoria.component';
import { AdmAddCategoriaComponent } from '../adm-add-categoria/adm-add-categoria.component';

@Component({
  selector: 'app-adm-list-categoria',
  templateUrl: './adm-list-categoria.component.html',
  styleUrls: ['./adm-list-categoria.component.css']
})


export class AdmListCategoriaComponent implements OnInit {
  categoryAxiliar: Category = new Category;
  constructor(public dialog: MatDialog, private categoryService: CategoryService, private router: Router, private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['#', 'Nombre', 'Cantidad de Productos','Cantidad de Trabajos Realizados','Opciones'];
  dataSource;
  data;//lista de categorias

  ngOnInit() {
    this.categoryService.getCategorys()
      .subscribe((data: Category[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }

  // getSizeOfProducts(data:Category[]){
  //   data.forEach(element => {
  //     this.categoryService.getProducts(element.id).subscribe(products => {
  //       element.productsSize = products.length
  //     })
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  onDelete(id: number) {
    this.categoryAxiliar.id = id;
    this.categoryService.deleteCategory(this.categoryAxiliar).subscribe(res => {
      if (res) {
        this.dataSource.data = this.dataSource.data.filter(e => e.id !== id);
        this.openSnackBar("Eliminado correctamente", "Aceptar");
      }
    }, err => {
      console.log("ERROR, No se elimino", err);
      this.openSnackBar("Error, No se pudo eliminar", "Aceptar");

    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onOptions(id: number) {
    this.router.navigateByUrl(`/admin/categorias/${id}`);
  }

  onDialogResponseEdit(categoryEdit: Category) {
    this.data.find(s=>s.id==categoryEdit.id).name=categoryEdit.name;
    // this.getSizeOfProducts(this.data);
  }

  onEditForm(categoryToEdit: Category) {
    const dialogRefEdit = this.dialog.open(AdmEditCategoriaComponent, { data: categoryToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedCategory => {
      if (EditedCategory) {
        this.onDialogResponseEdit(EditedCategory["data"]);
      }
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddCategoriaComponent, { width: "500px", height:"auto" });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.data.push(res["data"]);
        this.dataSource = new MatTableDataSource(this.data);
        // this.getSizeOfProducts(this.data);
      }
      err=>{
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }
}
