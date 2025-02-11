import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  addEmployee(employee: any): Observable<any> {
    console.log("Sending Data:", employee); // Debugging step
    console.log('this.http.post(this.apiUrl, employee) =>', this.http.post(this.apiUrl, employee));
    return this.http.post(`${this.apiUrl}/add`, employee);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  register(employee: any): Observable<any> {
    console.log('employee =>', employee);
    console.log('this.apiUrl =>', this.apiUrl);
    return this.http.post(`${this.apiUrl}/register`, employee);
  }

  login(email: string, password: string): Observable<any> {
    console.log('email =>', email);
    console.log('password =>', password);
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
  
}