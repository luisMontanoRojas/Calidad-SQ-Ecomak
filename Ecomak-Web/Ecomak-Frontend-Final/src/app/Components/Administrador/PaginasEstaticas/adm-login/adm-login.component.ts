import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  public loading: boolean;
  public error: string;

  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin';

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (await this.authService.currentUserValue) {
      await this.router.navigate([this.returnUrl]);
    }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.loading = true;
      // this.authService.login(username, password).subscribe(res => {
      //   this.loading = false;
      //   this.router.navigateByUrl('/admin');
      // }, err =>  {
      //   this.loading = false;
      //   this.loginInvalid = true;
      //   console.log(err);
      // });
      this.authService.login(username, password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.loading = false;
            this.loginInvalid = true;
            this.error = error;
          });

    } else {
      this.formSubmitAttempt = true;
    }
  }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //       return;
  //   }

  //   this.loading = true;    
  //   this.authenticationService.login(this.f.username.value, this.f.password.value)
  //       .pipe(first())
  //       .subscribe(
  //           data => {
  //               this.router.navigate([this.returnUrl + 'admin']);
  //           },
  //           error => {
  //               this.error = error;
  //               this.loading = false;
  //           });
  // }
}