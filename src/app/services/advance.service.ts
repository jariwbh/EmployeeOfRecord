import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvanceService {
  private apiUrl = 'http://localhost:3000/advance';

  constructor(private http: HttpClient) {}

  saveAdvance(advance: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, advance);
  }

  getAdvances(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
