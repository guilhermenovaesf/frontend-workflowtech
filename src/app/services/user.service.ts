import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  postUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/create`, data);
  }

  login(email: string, password: string): Observable<number> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/users/login`, loginData)
      .pipe(
        map(response => response as number)  // Ajuste conforme necessário se a resposta do backend for diferente
      );
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }

  // Função para remover o ID do usuário do localStorage (logout)
  logout(): void {
    localStorage.removeItem('userId');
  }
}
