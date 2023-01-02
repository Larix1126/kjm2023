import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kjm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public submit(): void {
    if (this.form.valid) {
      if (this.form.controls.password.value === this.form.controls.confirmPassword.value) {
        console.warn(this.form.value);
      } else {
        this.form.controls.confirmPassword.markAsTouched();
      }
    } else console.warn('NIMA');
  }
}
