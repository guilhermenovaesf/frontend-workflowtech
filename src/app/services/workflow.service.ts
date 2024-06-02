import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  private apiUrl = 'http://localhost:8080/workflow';

  private userId = localStorage.getItem('userId');

  constructor(private http: HttpClient) { }

  createWorkflow(workflow: any) {
    let httpOptions;
    if (this.userId) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          userId: this.userId.toString(), // Adiciona o userId ao cabeçalho da requisição
        }),
      };
    }

    return this.http.post<any>(
      `${this.apiUrl}/create`,
      workflow,
      httpOptions
    );
  }
}
