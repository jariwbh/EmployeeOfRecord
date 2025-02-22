import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollProcessComponent } from './payroll-process.component';

const routes: Routes = [
    { path: '', component: PayrollProcessComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PayrollProcessRoutingModule { }
