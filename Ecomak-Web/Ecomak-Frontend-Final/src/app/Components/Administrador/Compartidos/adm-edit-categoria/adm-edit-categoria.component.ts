import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CategoryService } from 'src/app/Services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-edit-categoria',
  templateUrl: './adm-edit-categoria.component.html',
  styleUrls: ['./adm-edit-categoria.component.css']
})
export class AdmEditCategoriaComponent implements OnInit {
  form: FormGroup;
  categoryEdit: Category = new Category;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private categoryservice: CategoryService, public dialogRef: MatDialogRef<AdmEditCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public category: Category,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.categoryEdit.id=this.category.id;
    this.categoryEdit.name=this.category.name;
    this.categoryEdit.productsSize=this.category.productsSize;
    this.form = this.fb.group({
      categoryName: ['', Validators.required]

    });
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    
    if (this.form.valid) {

      this.categoryEdit.name=this.form.get('categoryName').value;
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
