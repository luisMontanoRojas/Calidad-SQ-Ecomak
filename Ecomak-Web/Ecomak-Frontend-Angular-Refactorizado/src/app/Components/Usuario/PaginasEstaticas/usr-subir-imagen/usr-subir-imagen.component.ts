import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Image } from 'src/app/Models/Image';

@Component({
  selector: 'app-usr-subir-imagen',
  templateUrl: './usr-subir-imagen.component.html',
  styleUrls: ['./usr-subir-imagen.component.css']
})
export class UsrSubirImagenComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  @Input() TypeImage:string;

  constructor(private http: HttpClient) { }

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
    this.http.post('http://localhost:50455/a/api/uploadImage', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
 
}
