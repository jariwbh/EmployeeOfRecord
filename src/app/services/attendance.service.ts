import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000/attendance'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  saveAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, attendanceData);
  }

  getAttendanceRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get`);
  }

  getAttendanceByEmployeeId(employeeId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employee/${employeeId}`);
  }
}
