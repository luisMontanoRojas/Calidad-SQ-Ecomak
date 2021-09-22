import { Component, OnInit, Inject } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-add-productos-tr',
  templateUrl: './adm-add-productos-tr.component.html',
  styleUrls: ['./adm-add-productos-tr.component.css']
})
export class AdmAddProductosTrComponent implements OnInit {
  form: FormGroup;
  typeTr: string;
  fabricTr: string;
  designTr: string;
  quantityTr: string;
  sizeTr: string;
  handleTr: string;
  photoTr: string;

  public response: { 'dbPath': '' };

  p: ProductTr = new ProductTr;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private productService: ProductTrService, public dialogRef: MatDialogRef<AdmAddProductosTrComponent>,
    @Inject(MAT_DIALOG_DATA) public categorieId: number, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      productTypeTr: ['', Validators.required],
      productFabricTr: ['', Validators.required],
      productDesignTr: ['', Validators.required],
      productQuantityTr: ['', Validators.required],
      productSizeTr: ['', Validators.required],
      handleTr: ['', Validators.nullValidator]
      


    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
  async onSubmit() {

    if (this.form.valid) {
      this.p.categoryId = this.categorieId;
      this.p.typeTr = this.form.get('productTypeTr').value;
      this.p.photoTr = this.response.dbPath;;
      this.p.fabricTr = this.form.get('productFabricTr').value;;
      this.p.designTr = this.form.get('productDesignTr').value;;
      this.p.quantityTr = this.form.get('productQuantityTr').value;;
      this.p.sizeTr = this.form.get('productSizeTr').value;;
      this.p.handleTr = this.form.get('handleTr').value;;
      this.productService.productTradd(this.p).subscribe(s => {
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

  public uploadFinished = (event) => {
    this.response = event;
  }
}
