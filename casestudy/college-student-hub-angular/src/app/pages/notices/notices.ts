import { Component } from '@angular/core';

@Component({
  selector: 'app-notices',
  imports: [],
  templateUrl: './notices.html',
  styleUrl: './notices.css'
})
export class NoticesComponent {

  notices = [
    {
      icon: '📢',
      title: 'Mid Examination Timetable Released',
      category: 'Examination',
      date: '24 Aug 2026',
      description:
        'The mid examination timetable has been released. Students are requested to check the schedule.'
    },
    {
      icon: '📝',
      title: 'FSD Assignment Submission',
      category: 'Academic',
      date: '24 Aug 2026',
      description:
        'The React vs Angular case study must be submitted before 28 August.'
    },
    {
      icon: '🎉',
      title: 'Technical Fest Registrations Open',
      category: 'Events',
      date: '22 Aug 2026',
      description:
        'Registrations for the annual technical fest are now open for all students.'
    },
    {
      icon: '📚',
      title: 'Library Book Return Notice',
      category: 'Library',
      date: '21 Aug 2026',
      description:
        'Students are requested to return all overdue books to the central library.'
    },
    {
      icon: '🏫',
      title: 'Department Meeting',
      category: 'Department',
      date: '20 Aug 2026',
      description:
        'A department meeting will be conducted for all third-year students.'
    }
  ];

}