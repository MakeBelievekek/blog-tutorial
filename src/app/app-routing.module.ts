import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/feature/home-shell/home-shell.module').then((m) => m.HomeShellModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/feature/login-shell/login-shell.module').then((m) => m.LoginShellModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/feature/register-shell/register-shell.module').then((m) => m.RegisterShellModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/feature/blog-shell/blog-shell.module').then((m) => m.BlogShellModule),
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
