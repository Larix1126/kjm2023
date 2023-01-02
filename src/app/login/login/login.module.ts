import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(routes), MatCardModule, MatInputModule, MatButtonModule],
  exports: [LoginComponent],
})
export class LoginModule {}
