import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-adm-add-categoria',
  templateUrl: './adm-add-categoria.component.html',
  styleUrls: ['./adm-add-categoria.component.css']
})
export class AdmAddCategoriaComponent implements OnInit {

  name: string;
  newCategorie: Category = new Category;
  

  constructor(public dialog: MatDialog, private categoryService: CategoryService, public dialogRef: MatDialogRef<AdmAddCategoriaComponent>,
    private _snackBar: MatSnackBar) { }
  
  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.name)
    {
      this.newCategorie.name=this.name;

      this.categoryService.categoryadd(this.newCategorie).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Creado Correctamente!!","Aceptar",{
          duration:2000
        });
      },err=>{
        console.log(err);
        this._snackBar.open("Error Al Crear","Aceptar",{
          duration:2000,
        });
      });
    }
    else
    {
      this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
        duration: 2000,
      });
    }
  }

}
