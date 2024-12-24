import React from 'react';
import "./dashboard.scss"
const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <main className="dashboard-main">
        <section className="stats">
          <h2>Statistics</h2>
          <div className="stat-card">Users: 1,234</div>
          <div className="stat-card">Revenue: $12,345</div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User John updated his profile.</li>
            <li>New comment on blog post.</li>
            <li>Server restarted successfully.</li>
          </ul>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 Dashboard Inc.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
