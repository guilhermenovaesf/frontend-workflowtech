import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    // Adicione a lógica de login aqui
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  onCreateAccount() {
    // Adicione a lógica para criar um novo usuário aqui
    console.log('Redirecting to create account page...');
  }
}
