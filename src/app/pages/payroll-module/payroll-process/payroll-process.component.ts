import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AttendanceService } from '../../../services/attendance.service';
import { AdvanceService } from '../../../services/advance.service';
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
    advanceRecords: any[] = [];
    payrollData: any;
    payrollID: any;

    constructor(private employeeService: EmployeeService,
                private attendanceService: AttendanceService,
                private advanceService: AdvanceService,
                private payrollService: PayrollService,
                private _route: ActivatedRoute) {

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
        await this.fetchAdvanceRecords();
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

    async fetchAdvanceRecords() {
        this.advanceRecords = await this.advanceService.getAdvances().toPromise() || [];
        console.log('this.advanceRecords =>', this.advanceRecords);
    }

    getTotalPresents(employee: any) {
        const record = this.attendanceRecords.filter(record => record.employeeId === employee._id);
        return record ? record.length : 0;
    }

    getTotalDaysInMonth(): number {
        if (this.payrollData) {
            const date = new Date(this.payrollData.year, new Date().getMonth() + 1, 0);
            return date.getDate();
        }
        return 0;
    }

    getTotalLeave(employee: any): number {
        const totalPresents = this.getTotalPresents(employee);
        const totalDaysInMonth = this.getTotalDaysInMonth();
        return totalDaysInMonth - totalPresents;
    }

    getTotalAdvance(employee: any): number {
        const advances = this.advanceRecords.filter(advance => advance.employee._id === employee._id);
        
        return advances.reduce((acc: number, advance: any) => acc + advance.amount, 0);
    }

    calculateSalary(employee: any): number {
        const totalPresents = this.getTotalPresents(employee);
        const totalDaysInMonth = this.getTotalDaysInMonth();
        const dailyRate = employee.salaryComponent && employee.salaryComponent.length > 0 
            ? employee.salaryComponent.reduce((acc: number, component: { value: number }) => acc + component.value, 0) / totalDaysInMonth 
            : 0;
        const totalAdvance = this.getTotalAdvance(employee);
        const totalSalary = dailyRate * totalPresents;
        return totalSalary - totalAdvance;
    }

    processPayroll(): void {
        console.log('Payroll processing initiated');
    }
}
