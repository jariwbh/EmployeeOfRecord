import { Routes } from '@angular/router';
import { StaffComponent } from './staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { StaffListComponent } from './staff-list/staff-list.component';


export const StaffRoutes: Routes = [
  {
    path: '', component: StaffComponent,
    children: [
      { 
        path: 'staff-form', 
        loadChildren: () => import('./staff-form/staff-from.module').then(m => m.StaffFormModule),
      },
      { 
        path: 'staff-list', 
        loadChildren: () => import('./staff-list/staff-list.module').then(m => m.StaffListModule),
      },
      { 
        path: 'profile', 
        loadChildren: () => import('./staff-profile/staff-profile.module').then(m => m.StaffProfileModule),
      }
    ],
  },
];;