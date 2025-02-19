import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private apiUrl = 'http://localhost:3000/leaverequest'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createLeaveRequest(data: any): Observable<any> {
    console.log('data =>', data);
    return this.http.post<any>(`${this.apiUrl}/add`, data);
  }

  // Add other methods as needed
}
