import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard';
import { TimetableComponent } from './pages/timetable/timetable';
import { AssignmentsComponent } from './pages/assignments/assignments';
import { AttendanceComponent } from './pages/attendance/attendance';
import { NoticesComponent } from './pages/notices/notices';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'assignments',
    component: AssignmentsComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'notices',
    component: NoticesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];