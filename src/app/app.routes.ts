import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth';

export const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'form', loadChildren: () => import('./pages/user-form/user-form.module').then(m => m.UserFormModule) },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Proteja a rota do dashboard
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
