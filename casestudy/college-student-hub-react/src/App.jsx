import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const classes = [
  { time: "09:00 AM", subject: "Data Structures", faculty: "Dr. Rajesh Kumar", room: "Room 204", type: "Lecture" },
  { time: "11:00 AM", subject: "Web Development", faculty: "Prof. Priya Sharma", room: "Lab 2", type: "Practical" },
  { time: "02:00 PM", subject: "Database Management", faculty: "Dr. Arun Kumar", room: "Room 301", type: "Lecture" },
  { time: "03:15 PM", subject: "Operating Systems", faculty: "Prof. Suresh", room: "Room 205", type: "Lecture" }
];

const assignmentsData = [
  { id: 1, title: "React Web Application", subject: "Web Development", due: "25 Aug 2026", priority: "High", status: "Pending" },
  { id: 2, title: "Database Design", subject: "DBMS", due: "28 Aug 2026", priority: "Medium", status: "Pending" },
  { id: 3, title: "Process Scheduling", subject: "Operating Systems", due: "31 Aug 2026", priority: "Low", status: "Pending" },
  { id: 4, title: "Binary Search Implementation", subject: "Data Structures", due: "20 Aug 2026", priority: "High", status: "Completed" },
  { id: 5, title: "Network Topology Report", subject: "Computer Networks", due: "18 Aug 2026", priority: "Medium", status: "Completed" }
];

const attendanceData = [
  { subject: "Data Structures", attended: 46, total: 50 },
  { subject: "Web Development", attended: 45, total: 50 },
  { subject: "Database Management", attended: 42, total: 49 },
  { subject: "Operating Systems", attended: 40, total: 50 },
  { subject: "Computer Networks", attended: 44, total: 50 },
  { subject: "Software Engineering", attended: 43, total: 50 }
];

const noticesData = [
  { id: 1, title: "Mid Examination Timetable Released", category: "Examination", date: "Today", icon: "📢", important: true },
  { id: 2, title: "FSD Assignment Submission Deadline", category: "Academic", date: "Yesterday", icon: "📝", important: true },
  { id: 3, title: "Technical Fest Registrations Open", category: "Events", date: "2 days ago", icon: "🎉", important: false },
  { id: 4, title: "Library Working Hours Updated", category: "General", date: "3 days ago", icon: "📚", important: false },
  { id: 5, title: "Internal Assessment Marks Published", category: "Academic", date: "4 days ago", icon: "📊", important: true },
  { id: 6, title: "Hackathon 2026 Registration Started", category: "Events", date: "5 days ago", icon: "💻", important: false }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">🎓</div>
        <div>
          <h2>StudentHub</h2>
          <span>College Portal</span>
        </div>
      </div>

      <div className="student-mini">
        <div className="mini-avatar">M</div>
        <div>
          <strong>Manoj Kumar</strong>
          <span>CSM • 3rd Year</span>
        </div>
      </div>

      <nav>
        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>🏠</span> Dashboard
        </NavLink>

        <NavLink to="/timetable" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>📅</span> Timetable
        </NavLink>

        <NavLink to="/assignments" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>📝</span> Assignments <b>3</b>
        </NavLink>

        <NavLink to="/attendance" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>📊</span> Attendance
        </NavLink>

        <NavLink to="/notices" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>📢</span> Notices <b>4</b>
        </NavLink>

        <p className="menu-title">ACCOUNT</p>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span>👤</span> Profile
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="help">
          <span>💡</span>
          <div>
            <strong>Need Help?</strong>
            <small>Contact college support</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="topbar">
      <div className="mobile-brand">🎓 StudentHub</div>

      <div className="search">
        <span>🔍</span>
        <input placeholder="Search anything..." />
      </div>

      <div className="top-actions">
        <button
          className="icon-button"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="icon-button notification">
          🔔
          <span>4</span>
        </button>

        <div className="profile-mini">
          <div className="mini-avatar">M</div>
          <div>
            <strong>Manoj Kumar</strong>
            <span>Student</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <div className="welcome">
        <div>
          <p className="small-text">Student Dashboard</p>
          <h1>Good Morning, Manoj 👋</h1>
          <p>Here is your academic overview for today.</p>
        </div>
        <div className="avatar">M</div>
      </div>

      <div className="stats">
        <StatCard icon="📊" title="Attendance" value="87%" text="Good standing" type="success" />
        <StatCard icon="📝" title="Assignments" value="3" text="Pending" type="warning" />
        <StatCard icon="🎓" title="Current CGPA" value="8.4" text="Excellent" type="success" />
        <StatCard icon="📢" title="New Notices" value="4" text="View updates" type="info" />
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <div className="card-header">
            <div>
              <h2>Today's Classes</h2>
              <p>Your schedule for today</p>
            </div>
            <NavLink to="/timetable" className="view-link">View all →</NavLink>
          </div>

          {classes.map((item, index) => (
            <div className={`class-item ${index === 0 ? "active" : ""}`} key={item.subject}>
              <div className="time">
                <strong>{item.time}</strong>
              </div>

              <div className="class-info">
                <h3>{item.subject}</h3>
                <p>{item.faculty} • {item.room}</p>
              </div>

              {index === 0 && <span className="class-status">Now</span>}
            </div>
          ))}
        </section>

        <section className="card">
          <div className="card-header">
            <div>
              <h2>Upcoming Assignments</h2>
              <p>Don't miss your deadlines</p>
            </div>
            <NavLink to="/assignments" className="view-link">View all →</NavLink>
          </div>

          {assignmentsData.filter(a => a.status === "Pending").slice(0, 3).map(item => (
            <div className="assignment" key={item.id}>
              <div className="assignment-icon">📝</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subject}</p>
                <span className={`due ${item.priority.toLowerCase()}`}>
                  Due {item.due}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <div className="card-header">
            <div>
              <h2>Attendance Overview</h2>
              <p>Subject-wise attendance</p>
            </div>
            <NavLink to="/attendance" className="view-link">Details →</NavLink>
          </div>

          {attendanceData.slice(0, 5).map(item => (
            <AttendanceRow
              key={item.subject}
              subject={item.subject}
              percentage={Math.round((item.attended / item.total) * 100)}
            />
          ))}
        </section>

        <section className="card">
          <div className="card-header">
            <div>
              <h2>Recent Notices</h2>
              <p>Latest college announcements</p>
            </div>
            <NavLink to="/notices" className="view-link">View all →</NavLink>
          </div>

          {noticesData.slice(0, 3).map(item => (
            <div className="notice" key={item.id}>
              <span>{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, text, type }) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span className={type}>{text}</span>
      </div>
    </div>
  );
}

function AttendanceRow({ subject, percentage }) {
  return (
    <div className="attendance-row">
      <div className="attendance-title">
        <span>{subject}</span>
        <strong>{percentage}%</strong>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function Timetable() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="page">
      <PageHeading
        icon="📅"
        title="Timetable"
        description="Your complete weekly class schedule"
      />

      <div className="day-tabs">
        {days.map((day, index) => (
          <button className={index === 0 ? "day-tab active" : "day-tab"} key={day}>
            {day}
          </button>
        ))}
      </div>

      <div className="card timetable-card">
        <div className="table-responsive">
          <table className="timetable-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Room</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {classes.map((item, index) => (
                <tr key={item.subject}>
                  <td><strong>{item.time}</strong></td>
                  <td>
                    <div className="subject-cell">
                      <span className="subject-icon">
                        {["💻", "🌐", "🗄️", "⚙️"][index]}
                      </span>
                      <strong>{item.subject}</strong>
                    </div>
                  </td>
                  <td>{item.faculty}</td>
                  <td>{item.room}</td>
                  <td>
                    <span className="type-badge">{item.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="schedule-summary">
        <div className="card summary-card">
          <span>📚</span>
          <div>
            <strong>4 Classes</strong>
            <small>Today</small>
          </div>
        </div>

        <div className="card summary-card">
          <span>⏱️</span>
          <div>
            <strong>4 Hours</strong>
            <small>Total class time</small>
          </div>
        </div>

        <div className="card summary-card">
          <span>🧪</span>
          <div>
            <strong>1 Practical</strong>
            <small>Lab session</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function Assignments() {
  const [filter, setFilter] = useState("All");
  const [assignments, setAssignments] = useState(assignmentsData);
  const [search, setSearch] = useState("");

  const toggleStatus = id => {
    setAssignments(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: item.status === "Completed" ? "Pending" : "Completed" }
          : item
      )
    );
  };

  const filtered = assignments.filter(item => {
    const matchesFilter = filter === "All" || item.status === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page">
      <PageHeading
        icon="📝"
        title="Assignments"
        description="Track your assignments and submission deadlines"
      />

      <div className="assignment-controls">
        <div className="page-search">
          🔍
          <input
            placeholder="Search assignments..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {["All", "Pending", "Completed"].map(item => (
            <button
              key={item}
              className={filter === item ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="assignment-grid">
        {filtered.map(item => (
          <div className="card assignment-card" key={item.id}>
            <div className="assignment-top">
              <span className="large-assignment-icon">📝</span>
              <span className={`priority ${item.priority.toLowerCase()}`}>
                {item.priority} Priority
              </span>
            </div>

            <h2>{item.title}</h2>
            <p className="assignment-subject">{item.subject}</p>

            <div className="assignment-details">
              <div>
                <small>Deadline</small>
                <strong>📅 {item.due}</strong>
              </div>

              <div>
                <small>Status</small>
                <strong className={item.status === "Completed" ? "completed-text" : "pending-text"}>
                  {item.status}
                </strong>
              </div>
            </div>

            <button
              className={item.status === "Completed" ? "complete-btn completed" : "complete-btn"}
              onClick={() => toggleStatus(item.id)}
            >
              {item.status === "Completed" ? "✓ Completed" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Attendance() {
  const totalAttended = attendanceData.reduce((sum, item) => sum + item.attended, 0);
  const totalClasses = attendanceData.reduce((sum, item) => sum + item.total, 0);
  const overall = Math.round((totalAttended / totalClasses) * 100);

  return (
    <div className="page">
      <PageHeading
        icon="📊"
        title="Attendance"
        description="Monitor your subject-wise attendance"
      />

      <div className="attendance-top">
        <div className="card overall-attendance">
          <div className="circle">
            <span>{overall}%</span>
          </div>
          <div>
            <h2>Overall Attendance</h2>
            <p>You are maintaining a good attendance percentage.</p>
            <span className="success">Above minimum requirement</span>
          </div>
        </div>

        <div className="attendance-stats">
          <div className="card attendance-stat">
            <span>📅</span>
            <div>
              <strong>{totalClasses}</strong>
              <small>Total Classes</small>
            </div>
          </div>

          <div className="card attendance-stat">
            <span>✅</span>
            <div>
              <strong>{totalAttended}</strong>
              <small>Classes Attended</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h2>Subject-wise Attendance</h2>
            <p>Detailed attendance information</p>
          </div>
        </div>

        <div className="attendance-table">
          {attendanceData.map(item => {
            const percentage = Math.round((item.attended / item.total) * 100);

            return (
              <div className="attendance-detail" key={item.subject}>
                <div className="attendance-detail-title">
                  <strong>{item.subject}</strong>
                  <span>{item.attended}/{item.total} classes</span>
                  <b>{percentage}%</b>
                </div>

                <div className="progress large">
                  <div
                    className={`progress-bar ${percentage < 75 ? "danger" : ""}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Notices() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Academic", "Examination", "Events", "General"];

  const filtered = noticesData.filter(item => {
    const categoryMatch = category === "All" || item.category === category;
    const searchMatch = item.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="page">
      <PageHeading
        icon="📢"
        title="Notices"
        description="Latest college announcements and updates"
      />

      <div className="notice-controls">
        <div className="page-search">
          🔍
          <input
            placeholder="Search notices..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {categories.map(item => (
            <button
              key={item}
              className={category === item ? "filter-btn active" : "filter-btn"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="notices-grid">
        {filtered.map(item => (
          <div className={`card full-notice ${item.important ? "important" : ""}`} key={item.id}>
            <div className="notice-icon-large">{item.icon}</div>

            <div className="notice-content">
              <div className="notice-meta">
                <span>{item.category}</span>
                <small>{item.date}</small>
              </div>

              <h2>{item.title}</h2>

              <p>
                Important college announcement. Please check the official
                college communication channels for complete details.
              </p>

              <button className="read-btn">Read Announcement →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="page">
      <PageHeading
        icon="👤"
        title="My Profile"
        description="View and manage your student information"
      />

      <div className="profile-grid">
        <div className="card profile-card">
          <div className="profile-avatar">M</div>
          <h2>Manoj Kumar</h2>
          <p>Computer Science & Machine Learning</p>
          <span className="student-badge">3rd Year Student</span>

          <div className="profile-contact">
            <p>📧 manoj@example.com</p>
            <p>📱 +91 98765 43210</p>
            <p>🏫 College Campus</p>
          </div>
        </div>

        <div className="card profile-details">
          <div className="card-header">
            <div>
              <h2>Student Information</h2>
              <p>Your academic details</p>
            </div>
            <button className="edit-btn">✏️ Edit Profile</button>
          </div>

          <div className="details-grid">
            <Info label="Full Name" value="Manoj Kumar" />
            <Info label="Roll Number" value="160124748039" />
            <Info label="Branch" value="CSM" />
            <Info label="Year" value="3rd Year" />
            <Info label="Semester" value="5th Semester" />
            <Info label="CGPA" value="8.4" />
            <Info label="Email" value="manoj@example.com" />
            <Info label="College" value="Engineering College" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="info-field">
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

function PageHeading({ icon, title, description }) {
  return (
    <div className="page-title">
      <span>{icon}</span>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Sidebar />

        <main className="main">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;