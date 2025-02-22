import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PayrollService {
    private apiUrl = 'http://localhost:3000/payroll';

    constructor(private http: HttpClient) { }

    savePayrollData(payroll: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/save`, payroll);
    }
}
