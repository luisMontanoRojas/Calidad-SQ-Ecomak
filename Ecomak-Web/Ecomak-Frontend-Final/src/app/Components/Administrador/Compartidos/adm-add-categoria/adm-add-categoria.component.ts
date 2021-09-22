import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CategoryService } from 'src/app/Services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-adm-add-categoria',
  templateUrl: './adm-add-categoria.component.html',
  styleUrls: ['./adm-add-categoria.component.css']
})
export class AdmAddCategoriaComponent implements OnInit {
  form: FormGroup;

  name: string;
  newCategorie: Category = new Category;


  constructor(private fb: FormBuilder, public dialog: MatDialog, private categoryService: CategoryService, public dialogRef: MatDialogRef<AdmAddCategoriaComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.form = this.fb.group({
      categoryName: ['', Validators.required]

    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
  async onSubmit() {
    
    if (this.form.valid) {

      this.newCategorie.name = this.name;

      this.categoryService.categoryadd(this.newCategorie).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Creado Correctamente!!", "Aceptar", {
          duration: 2000
        });
      }, err => {
        console.log(err);
        this._snackBar.open("Error Al Crear", "Aceptar", {
          duration: 2000,
        });
      });
    }
    else {
      this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
        duration: 2000,
      });
    }
  }
  
}


