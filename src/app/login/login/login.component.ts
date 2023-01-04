import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'kjm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private apiService: ApiService, private router: Router) {}
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit(): void {
    if (this.form.valid) {
      this.apiService
        .fetchLogin(this.form.controls.username.value, this.form.controls.password.value)
        .subscribe(() => this.router.navigate(['/board']));
      console.warn(this.form.value);
    }
  }
}
