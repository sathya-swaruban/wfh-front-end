import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { WfhRequest } from './wfhrequest';

@Injectable({
  providedIn: 'root'
})
export class WfhService {
  
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getCurrentDate(): Observable<string> {
    return this.http.get<string>(`${this.apiServerUrl}/current_date`);
  }

  public submitRequest(wfhRequest: NgForm): Observable<WfhRequest> {
    return this.http.post<WfhRequest>(`${this.apiServerUrl}/submit`, wfhRequest);
  }
}
