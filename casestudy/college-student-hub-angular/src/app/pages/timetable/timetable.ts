import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  imports: [],
  templateUrl: './timetable.html',
  styleUrl: './timetable.css'
})
export class TimetableComponent {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  schedule = [
    {
      time: '09:00',
      subjects: [
        'Machine Learning',
        'DBMS',
        'Full Stack Development',
        'Operating Systems',
        'Machine Learning'
      ]
    },
    {
      time: '10:00',
      subjects: [
        'Full Stack Development',
        'Operating Systems',
        'Machine Learning',
        'DBMS',
        'Full Stack Development'
      ]
    },
    {
      time: '11:30',
      subjects: [
        'DBMS',
        'Machine Learning',
        'Operating Systems',
        'Full Stack Development',
        'DBMS'
      ]
    },
    {
      time: '01:00',
      subjects: [
        'Lunch Break',
        'Lunch Break',
        'Lunch Break',
        'Lunch Break',
        'Lunch Break'
      ]
    },
    {
      time: '02:00',
      subjects: [
        'Operating Systems',
        'Full Stack Development',
        'DBMS',
        'Machine Learning',
        'Operating Systems'
      ]
    },
    {
      time: '03:00',
      subjects: [
        'Computer Networks',
        'Computer Networks',
        'FSD Lab',
        'Computer Networks',
        'FSD Lab'
      ]
    }
  ];

}