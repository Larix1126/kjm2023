import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'kjm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private apiService: ApiService, private router: Router) {}
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public submit(): void {
    if (this.form.valid) {
      if (this.form.controls.password.value === this.form.controls.confirmPassword.value) {
        this.apiService
          .fetchRegister(
            this.form.controls.email.value,
            this.form.controls.password.value,
            this.form.controls.firstName.value,
            this.form.controls.lastName.value,
          )
          .subscribe(() => this.router.navigate(['/login']));
      } else {
        this.form.controls.confirmPassword.markAsTouched();
      }
    } else console.warn('NIMA');
  }
}
