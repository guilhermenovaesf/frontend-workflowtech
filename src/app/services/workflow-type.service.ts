import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkflowTypeService {
  private apiUrl = 'http://localhost:8080/workflowType';

  private userId = localStorage.getItem('userId');

  constructor(private http: HttpClient) {}

  getWorkflowTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/list');
  }

  createWorkflowType(workflowType: any) {
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
      workflowType,
      httpOptions
    );
  }

  getWorkflowType(workflowTypeId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${workflowTypeId}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
