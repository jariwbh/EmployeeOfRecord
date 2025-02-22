import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardModule } from './dashboard/dashboard.module';

// import { AuthGuard } from '../core/services/common/auth-guard.service';

export const PagesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'pages', component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                // canActivate: [AuthGuard]
            },
            {
                path: 'staff',
                loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
                // canActivate: [AuthGuard]
            },
            {
                path: 'leave',
                loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule),
                // canActivate: [AuthGuard]
            },
            {
                path: 'attendance',
                loadChildren: () => import('./attendance-module/attendance-module.module').then(m => m.AttendanceModule),
                // canActivate: [AuthGuard]
            },
            {
                path: 'payroll',
                loadChildren: () => import('./payroll-module/payroll-module.module').then(m => m.PayrollModule),
                // canActivate: [AuthGuard]
            },
            {
                path: 'calendar',
                loadChildren: () => import('./calendar-module/calendar-module.module').then(m => m.CalendarModule),
                // canActivate: [AuthGuard]
            }
        ]
    }

];
