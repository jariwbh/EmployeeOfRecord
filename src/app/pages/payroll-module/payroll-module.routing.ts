import { Routes } from '@angular/router';
import { PayrollModuleComponent } from './payroll-module.component';
import { PayrollProcessComponent } from './payroll-process/payroll-process.component';

export const PayrollModuleRoutes: Routes = [
  { path: '', component: PayrollModuleComponent },
  { path: 'payroll-process', component: PayrollProcessComponent }
];
