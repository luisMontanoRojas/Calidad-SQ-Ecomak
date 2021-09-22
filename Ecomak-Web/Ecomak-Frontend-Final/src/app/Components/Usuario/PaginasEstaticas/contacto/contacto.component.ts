import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  name: string;
  company: string;
  email: string;
  phone: number;
  message: string;
  c: Subscribe = new Subscribe;
  submitted=false;

  @Output() Suscribeadd: EventEmitter<any> = new EventEmitter();
  constructor(private SuscribeService: SubscribeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  get f() { return this.contactForm.value; }
  onSubmit() {
    if (this.contactForm.invalid) {
      this.submitted=false;
      return;
    }
    this.submitted=true;
    this.SuscribeService.Subscribeadd(this.f).subscribe(

      subscribe => {
        $(document).ready(function () {
          $('#ModalSubscribe').click();
          {
            $("form")[0].reset();
          }
        });
      });

  }
  onCerrar(){
    this.submitted=false;
  }

}
