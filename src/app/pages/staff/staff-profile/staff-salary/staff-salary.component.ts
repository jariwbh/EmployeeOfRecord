import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../../services/employee.service';

@Component({
  selector: 'app-staff-salary',
  templateUrl: './staff-salary.component.html',
  styleUrls: ['./staff-salary.component.css']
})
export class StaffSalaryComponent implements OnInit {
  salaryForm: FormGroup;
  totalSalary: number = 0;
  @Input() staff: any;

  constructor(private fb: FormBuilder, private staffService: EmployeeService) {
    this.salaryForm = this.fb.group({
        basic: ['', Validators.required],
        tax: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    if (this.staff && this.staff.salaryComponent) {
        this.salaryForm.patchValue({
            basic: this.staff.salaryComponent.basic,
            tax: this.staff.salaryComponent.tax
        });
        this.calculateTotalSalary();
    }

    this.salaryForm.valueChanges.subscribe(() => {
      this.calculateTotalSalary();
    });
  }

  calculateTotalSalary(): void {
    const basic = this.salaryForm.get('basic')?.value || 0;
    const tax = this.salaryForm.get('tax')?.value || 0;
    this.totalSalary = basic - tax;
  }

  onSubmit(): void {
    if (this.salaryForm.valid) {
        console.log(this.salaryForm.value);
        this.staff.salaryComponent = this.salaryForm.value;
        console.log('staff =>', this.staff);
        // Assuming you have a service to handle HTTP requests
        this.staffService.updateStaff(this.staff).subscribe(
            (response: any) => {
            console.log('Staff data updated successfully', response);
            },
            (error: any) => {
            console.error('Error updating staff data', error);
            }
        );

    }
  }
}