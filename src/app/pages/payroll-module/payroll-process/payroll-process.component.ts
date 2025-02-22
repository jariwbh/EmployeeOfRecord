import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AttendanceService } from '../../../services/attendance.service';
import { ActivatedRoute } from '@angular/router';
import { PayrollService } from '../../../services/payroll.service';

@Component({
    selector: 'app-payroll-process',
    templateUrl: './payroll-process.component.html',
    styleUrls: ['./payroll-process.component.css']
})
export class PayrollProcessComponent implements OnInit {
    employeeData: any[] = [];
    attendanceRecords: any[] = [];
    payrollData: any;
    payrollID: any;

    constructor(private employeeService: EmployeeService,
                private attendanceService: AttendanceService,
                private payrollService: PayrollService,
             private _route: ActivatedRoute,) {

                    this._route.params.forEach((params) => {
                        console.log('params =>', params);
                        this.payrollID = params["id"];      
                      });
                 }

    async ngOnInit() {
        if(this.payrollID){
            this.fetchPayrollData();
        }
        await this.fetchEmployeeData();
        await this.fetchAttendanceRecords();
    }

    fetchPayrollData(): void {
        console.log('Fetching payroll data');
        this.payrollService.getPayrollById(this.payrollID).toPromise().then(data => {
            this.payrollData = data;
            console.log('this.payrollData =>', this.payrollData);
        });

    }

    async fetchEmployeeData() {
        this.employeeData = await this.employeeService.getEmployees().toPromise() || [];
        console.log('this.employeeData =>', this.employeeData);
    }

    async fetchAttendanceRecords() {
        this.attendanceRecords = await this.attendanceService.getAttendanceRecords().toPromise() || [];
        console.log('this.attendanceRecords =>', this.attendanceRecords);
      
    }

    getTotalPresents(employee: any) {
        const record = this.attendanceRecords.filter(record => record.employeeId === employee._id);
        return record ? record.length : 0;
    }

    getTotalLeave(employeeId: number): number {
        const record = this.attendanceRecords.find(record => record.employeeId === employeeId);
        return record ? record.daysLeave : 0;
    }

    processPayroll(): void {
        console.log('Payroll processing initiated');
    }
}
