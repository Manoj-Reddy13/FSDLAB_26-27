function Dashboard() {
  return (
    <div className="page">

      <div className="student-header">
        <div>
          <h1>Welcome, Manoj Kumar Reddy 👋</h1>
          <p>Here's your college activity overview.</p>
        </div>

        <div className="student-info">
          <p><strong>Roll No:</strong> 160124748039</p>
          <p><strong>Branch:</strong> CSM</p>
          <p><strong>Year:</strong> 3rd Year</p>
        </div>
      </div>

      <div className="cards">

        <div className="card">
          <h2>82%</h2>
          <p>Overall Attendance</p>
        </div>

        <div className="card">
          <h2>3</h2>
          <p>Pending Assignments</p>
        </div>

        <div className="card">
          <h2>5</h2>
          <p>Today's Classes</p>
        </div>

        <div className="card">
          <h2>8.4</h2>
          <p>Current CGPA</p>
        </div>

      </div>

      <div className="section">

        <h2>Today's Classes</h2>

        <div className="class-item">
          <span>09:00 AM</span>
          <strong>Machine Learning</strong>
          <span>Room 301</span>
        </div>

        <div className="class-item">
          <span>10:00 AM</span>
          <strong>Full Stack Development</strong>
          <span>Lab 2</span>
        </div>

        <div className="class-item">
          <span>11:00 AM</span>
          <strong>Database Management</strong>
          <span>Room 205</span>
        </div>

        <div className="class-item">
          <span>02:00 PM</span>
          <strong>Operating Systems</strong>
          <span>Room 104</span>
        </div>

      </div>

      <div className="section">

        <h2>Latest Notices</h2>

        <div className="notice">
          <h3>📢 FSD Assignment</h3>
          <p>
            Assignment submission deadline is 28 August.
          </p>
        </div>

        <div className="notice">
          <h3>📢 Mid Examination</h3>
          <p>
            Mid examination timetable has been released.
          </p>
        </div>

        <div className="notice">
          <h3>📢 Technical Fest</h3>
          <p>
            College technical fest registrations are now open.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;