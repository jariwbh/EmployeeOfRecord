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
    return this.http.post(`${this.apiUrl}/add`, employee);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    console.log('${this.apiUrl}/update/${id} =>', this.apiUrl +'/update/' + id);
    return this.http.put(`${this.apiUrl}/update/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  register(employee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, employee);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
  
  updateStaff(staff: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${staff._id}`, staff);
  }
  
}