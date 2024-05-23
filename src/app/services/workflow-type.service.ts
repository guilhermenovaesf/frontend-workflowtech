import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowTypeService {

  private apiUrl = 'http://localhost:8080/workflowType';

  constructor(private http: HttpClient) { }

  getWorkflowTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/list");
  }

}
