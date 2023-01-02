import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { of } from 'rxjs';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { LayoutModule } from './core/layout/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: '/login' },
          {
            path: 'login',
            loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule),
          },
          {
            path: 'register',
            loadChildren: () => import('./login/register/register.module').then(m => m.RegisterModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
