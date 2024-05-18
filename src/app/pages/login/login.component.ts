import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router){

  }

  onLogin() {
    // Adicione a lógica de login aqui
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  onCreateAccount() {
    this.router.navigate(['/form']);
  }
}
