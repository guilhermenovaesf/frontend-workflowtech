import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    const userId = this.userService.getUserId();
    if (userId !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // onst routes: Routes = [
  //   { path: 'login', component: LoginComponent },
  //   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Proteja a rota do dashboard
  //   { path: '', redirectTo: '/login', pathMatch: 'full' }
  // ];
}
