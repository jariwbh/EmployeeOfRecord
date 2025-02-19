import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  private apiUrl = 'http://localhost:3000/leavetype'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getLeaveTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }

  getLeaveType(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLeaveType(data: any): Observable<any> {
    console.log('data =>', data);
    console.log('this.apiUrl =>', this.apiUrl);
    return this.http.post<any>(`${this.apiUrl}/add`, data);
  }

  updateLeaveType(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteLeaveType(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
