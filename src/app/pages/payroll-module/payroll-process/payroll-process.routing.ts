
import { RouterModule, Routes } from '@angular/router';
import { PayrollProcessComponent } from './payroll-process.component';



const routes: Routes = [
  { path: '', component: PayrollProcessComponent },
  { path: ':id', component: PayrollProcessComponent }
];

export const routing = RouterModule.forChild(routes);
