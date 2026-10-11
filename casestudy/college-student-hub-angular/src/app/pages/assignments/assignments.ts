import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  imports: [],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class AssignmentsComponent {

  assignments = [
    {
      title: 'React vs Angular Case Study',
      subject: 'Full Stack Development',
      due: '28 Aug 2026',
      priority: 'High',
      status: 'Pending'
    },
    {
      title: 'Machine Learning Report',
      subject: 'Machine Learning',
      due: '30 Aug 2026',
      priority: 'Medium',
      status: 'Pending'
    },
    {
      title: 'SQL Query Assignment',
      subject: 'Database Management',
      due: '02 Sep 2026',
      priority: 'Low',
      status: 'Completed'
    },
    {
      title: 'CPU Scheduling Program',
      subject: 'Operating Systems',
      due: '05 Sep 2026',
      priority: 'High',
      status: 'Pending'
    },
    {
      title: 'Network Protocol Report',
      subject: 'Computer Networks',
      due: '08 Sep 2026',
      priority: 'Medium',
      status: 'Completed'
    }
  ];

  markComplete(index: number) {
    this.assignments[index].status =
      this.assignments[index].status === 'Completed'
        ? 'Pending'
        : 'Completed';
  }

}