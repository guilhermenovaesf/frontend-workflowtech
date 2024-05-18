import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false]
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      let focusElement: HTMLElement = document.getElementsByClassName('text')[0] as HTMLElement;
      focusElement.focus();
    }, 0);

  }

  onCreateAccount() {
    if (this.accountForm.valid) {
      // Processar os dados do formulário
      console.log('Dados do formulário:', this.accountForm.value);
      // Navegar para outra rota após a criação da conta, se necessário
      this.router.navigate(['/login']);
    } else {
      // Formulário inválido, exibir mensagens de erro ou fazer outras ações necessárias
      console.error('Formulário inválido.');
    }
  }

  return(){
    this.router.navigate(['/login']);
  }
}
