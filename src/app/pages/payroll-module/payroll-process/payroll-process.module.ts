import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollProcessComponent } from './payroll-process.component';
import { routing } from './payroll-process.routing';

@NgModule({
    declarations: [],
    imports: [
        CommonModule, // Ensure CommonModule is imported
        routing
    ],
    exports: [PayrollProcessComponent]
})
export class PayrollProcessModule { }
