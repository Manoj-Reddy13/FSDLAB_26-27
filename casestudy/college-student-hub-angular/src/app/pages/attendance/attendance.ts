import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class AttendanceComponent {

  subjects = [
    {
      name: 'Machine Learning',
      code: 'CSM301',
      attended: 34,
      total: 40,
      percentage: 85
    },
    {
      name: 'Full Stack Development',
      code: 'FSD302',
      attended: 32,
      total: 40,
      percentage: 80
    },
    {
      name: 'Database Management',
      code: 'DBMS303',
      attended: 36,
      total: 40,
      percentage: 90
    },
    {
      name: 'Operating Systems',
      code: 'OS304',
      attended: 29,
      total: 40,
      percentage: 72
    },
    {
      name: 'Computer Networks',
      code: 'CN305',
      attended: 34,
      total: 40,
      percentage: 85
    }
  ];

}