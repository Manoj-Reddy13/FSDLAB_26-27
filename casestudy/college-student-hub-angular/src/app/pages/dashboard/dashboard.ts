import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  student = {
    name: 'Manoj Kumar Reddy',
    rollNo: '160124748039',
    branch: 'Computer Science & Machine Learning',
    year: '3rd Year',
    semester: 'I Semester'
  };

  stats = [
    {
      icon: '📊',
      value: '82%',
      label: 'Attendance',
      change: '+3.2%',
      color: 'blue'
    },
    {
      icon: '📝',
      value: '03',
      label: 'Pending Tasks',
      change: '2 due soon',
      color: 'orange'
    },
    {
      icon: '📚',
      value: '05',
      label: 'Classes Today',
      change: 'Next at 10:00 AM',
      color: 'purple'
    },
    {
      icon: '🎯',
      value: '8.4',
      label: 'Current CGPA',
      change: '+0.2 this sem',
      color: 'green'
    }
  ];

  classes = [
    {
      time: '09:00 AM',
      subject: 'Machine Learning',
      code: 'CSM301',
      room: 'Room 301',
      type: 'Lecture'
    },
    {
      time: '10:00 AM',
      subject: 'Full Stack Development',
      code: 'FSD302',
      room: 'FSD Lab 2',
      type: 'Lab'
    },
    {
      time: '11:30 AM',
      subject: 'Database Management',
      code: 'DBMS303',
      room: 'Room 205',
      type: 'Lecture'
    },
    {
      time: '02:00 PM',
      subject: 'Operating Systems',
      code: 'OS304',
      room: 'Room 104',
      type: 'Lecture'
    }
  ];

  attendance = [
    { subject: 'Machine Learning', percentage: 85 },
    { subject: 'FSD', percentage: 80 },
    { subject: 'DBMS', percentage: 90 },
    { subject: 'Operating Systems', percentage: 72 }
  ];

  assignments = [
    {
      title: 'React vs Angular Case Study',
      subject: 'Full Stack Development',
      due: 'Aug 28',
      priority: 'High'
    },
    {
      title: 'Machine Learning Report',
      subject: 'Machine Learning',
      due: 'Aug 30',
      priority: 'Medium'
    },
    {
      title: 'SQL Query Assignment',
      subject: 'DBMS',
      due: 'Sep 02',
      priority: 'Low'
    }
  ];

  notices = [
    {
      title: 'Mid Examination Timetable Released',
      date: 'Today',
      icon: '📢'
    },
    {
      title: 'FSD Assignment Submission Deadline',
      date: 'Yesterday',
      icon: '📝'
    },
    {
      title: 'Technical Fest Registrations Open',
      date: '2 days ago',
      icon: '🎉'
    }
  ];

}