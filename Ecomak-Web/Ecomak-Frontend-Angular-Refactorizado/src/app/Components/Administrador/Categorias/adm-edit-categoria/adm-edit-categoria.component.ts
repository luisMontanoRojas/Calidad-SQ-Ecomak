import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-adm-edit-categoria',
  templateUrl: './adm-edit-categoria.component.html',
  styleUrls: ['./adm-edit-categoria.component.css']
})
export class AdmEditCategoriaComponent implements OnInit {
  
  categoryEdit: Category = new Category;

  constructor(public dialog: MatDialog, private categoryservice: CategoryService, public dialogRef: MatDialogRef<AdmEditCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public category: Category,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.categoryEdit.id=this.category.id;
    this.categoryEdit.name=this.category.name;
    this.categoryEdit.cantProducts=this.category.cantProducts;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.categoryEdit.name))
    {
      this.categoryservice.editCategory(this.categoryEdit).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Editado Correctamente!!","Aceptar",{
          duration:2000,
        });
      },err=>{
        console.log(err);
        this._snackBar.open("Error Al Editar","Aceptar",{
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
