import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSelectModule, MatToolbarModule, MatMenuModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
