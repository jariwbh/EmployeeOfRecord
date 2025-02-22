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
      console.log('this.staff =>', this.staff);
        this.salaryForm.patchValue({
            basic: this.staff.salaryComponent.find((component: any) => component.component === 'basic')?.value,
            tax: this.staff.salaryComponent.find((component: any) => component.component === 'tax')?.value
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
    this.staff.salaryComponent = [];
    if (this.salaryForm.valid) {
        console.log(this.salaryForm.value);
        for (const key in this.salaryForm.value){
          console.log('key =>', key);
          this.staff.salaryComponent.push({ component: key, value: this.salaryForm.value[key] });
        }

        console.log('staff =>', this.staff);
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