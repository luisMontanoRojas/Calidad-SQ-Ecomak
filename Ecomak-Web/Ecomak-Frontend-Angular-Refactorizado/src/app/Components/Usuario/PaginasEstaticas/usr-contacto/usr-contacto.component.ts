import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

@Component({
  selector: 'app-usr-subscriptor',
  templateUrl: './usr-contacto.component.html',
  styleUrls: ['./usr-contacto.component.css']
})
export class UsrContactoComponent implements OnInit {
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
