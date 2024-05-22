import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public userService: UserService) {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      admin: [false]
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
      const formValue = this.accountForm.value;

      // Convert 'admin' boolean to 0 or 1
      formValue.admin = formValue.admin ? 1 : 0;
      this.userService.postUser(this.accountForm.value).subscribe((data)=>{
        console.log(data)
      })
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
