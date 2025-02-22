import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
    selector: 'app-payroll-process',
    templateUrl: './payroll-process.component.html',
    styleUrls: ['./payroll-process.component.css']
})
export class PayrollProcessComponent implements OnInit {
    employeeData: any[] = [];
    attendanceRecords: any[] = [];

    constructor(private employeeService: EmployeeService,
                private attendanceService: AttendanceService) { }

    async ngOnInit() {
        await this.fetchEmployeeData();
        await this.fetchAttendanceRecords();
    }

    async fetchEmployeeData() {
        this.employeeData = await this.employeeService.getEmployees().toPromise() || [];
        console.log('this.employeeData =>', this.employeeData);
    }

    async fetchAttendanceRecords() {
        this.attendanceRecords = await this.attendanceService.getAttendanceRecords().toPromise() || [];
        console.log('this.attendanceRecords =>', this.attendanceRecords);
    }

    getTotalPresents(employeeId: number): number {
        const record = this.attendanceRecords.find(record => record.employeeId === employeeId);
        return record ? record.daysPresent : 0;
    }

    getTotalLeave(employeeId: number): number {
        const record = this.attendanceRecords.find(record => record.employeeId === employeeId);
        return record ? record.daysLeave : 0;
    }

    processPayroll(): void {
        console.log('Payroll processing initiated');
    }
}
