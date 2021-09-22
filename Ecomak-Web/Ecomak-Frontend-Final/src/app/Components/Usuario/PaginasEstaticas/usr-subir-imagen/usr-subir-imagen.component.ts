import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usr-subir-imagen',
  templateUrl: './usr-subir-imagen.component.html',
  styleUrls: ['./usr-subir-imagen.component.css']
})
export class UsrSubirImagenComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  @Input() TypeImage: string;
  api: string;
  constructor(private http: HttpClient, private _constant: ConstantsService, private _snackBar: MatSnackBar) {
    this.api = _constant.apiUrl;
  }

  ngOnInit() {
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', this.TypeImage);
    this.http.post(this.api + 'api/uploadImage', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      }), err => {
        console.log(err);
        this._snackBar.open("Error al subir imgen", "Aceptar", {
          duration: 2000,
        });
      }
  }

}