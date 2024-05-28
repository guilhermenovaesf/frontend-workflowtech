import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
    this.initializeUser();
  }

  postUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  login(email: string, password: string): Observable<number> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      map((response) => response as number) // Ajuste conforme necessário se a resposta do backend for diferente
    );
  }

  getUser(userId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`).pipe(
      map((response) => {
        this.user = response; // Armazena o usuário na propriedade user
        return response;
      }),
      catchError((error) => {
        console.error('Error fetching user:', error);
        return of(null);
      })
    );
  }

  listUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list`).pipe(
      map((response) => {
        return response;
      })
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

  private initializeUser(): void {
    const userId = this.getUserId();
    if (userId && !this.user) {
      this.getUser(userId).subscribe();
    }
  }

}
