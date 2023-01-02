import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../navbar/navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
