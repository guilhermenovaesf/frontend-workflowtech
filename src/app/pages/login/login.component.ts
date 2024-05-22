import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, public userService: UserService){

  }

  onLogin() {
    this.userService.login(this.email, this.password).subscribe({
      next: (userId) => {
        console.log('Login successful, user ID:', userId);
        localStorage.setItem('userId', userId.toString());
        // Navigate to a different page after successful login
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Email ou senha inválidos');
      }
    });
  }

  onCreateAccount() {
    this.router.navigate(['/form']);
  }
}
