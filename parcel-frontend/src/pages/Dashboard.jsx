import Layout from "../components/Layout";
import "./Dashboard.css";

function Dashboard() {
  // Sample data for recent activity
  const recentActivity = [
    { id: 1, action: "Parcel #1234 delivered", time: "5 minutes ago", status: "delivered", icon: "✅" },
    { id: 2, action: "New parcel #1235 created", time: "15 minutes ago", status: "pending", icon: "📦" },
    { id: 3, action: "Parcel #1232 in transit", time: "1 hour ago", status: "transit", icon: "🚚" },
    { id: 4, action: "Parcel #1230 out for delivery", time: "2 hours ago", status: "transit", icon: "🚛" },
  ];

  return (
    <Layout>
      <div className="dashboard-container">
        {/* Welcome header */}
        <div className="dashboard-welcome">
          <h2>
            Welcome back, Admin! <span>👋</span>
          </h2>
          <p>Here's what's happening with your parcels today.</p>
        </div>

        {/* Stats grid */}
        <div className="dashboard-stats-grid">
          <div className="dashboard-stat-card total">
            <div className="dashboard-stat-icon">📦</div>
            <div className="dashboard-stat-title">Total Parcels</div>
            <div className="dashboard-stat-value">
              12 <span className="dashboard-stat-unit">total</span>
            </div>
            <div className="dashboard-stat-progress">
              <div className="dashboard-stat-progress-bar" style={{ width: '60%', background: '#667eea' }}></div>
            </div>
          </div>

          <div className="dashboard-stat-card pending">
            <div className="dashboard-stat-icon">⏳</div>
            <div className="dashboard-stat-title">Pending</div>
            <div className="dashboard-stat-value">
              4 <span className="dashboard-stat-unit">awaiting</span>
            </div>
            <div className="dashboard-stat-progress">
              <div className="dashboard-stat-progress-bar" style={{ width: '33%', background: '#fbbf24' }}></div>
            </div>
          </div>

          <div className="dashboard-stat-card delivered">
            <div className="dashboard-stat-icon">✅</div>
            <div className="dashboard-stat-title">Delivered</div>
            <div className="dashboard-stat-value">
              8 <span className="dashboard-stat-unit">completed</span>
            </div>
            <div className="dashboard-stat-progress">
              <div className="dashboard-stat-progress-bar" style={{ width: '67%', background: '#34d399' }}></div>
            </div>
          </div>
        </div>

        {/* Recent activity section */}
        <div className="dashboard-recent-activity">
          <h3 className="dashboard-section-title">Recent Activity</h3>
          <div className="dashboard-activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="dashboard-activity-item">
                <div className="dashboard-activity-icon">{activity.icon}</div>
                <div className="dashboard-activity-content">
                  <div className="dashboard-activity-title">{activity.action}</div>
                  <div className="dashboard-activity-time">{activity.time}</div>
                </div>
                <div className={`dashboard-activity-status ${activity.status}`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="dashboard-quick-actions">
          <button className="dashboard-quick-action-btn">
            <span>📦</span>
            Create Parcel
          </button>
          <button className="dashboard-quick-action-btn">
            <span>🔍</span>
            Track Parcel
          </button>
          <button className="dashboard-quick-action-btn">
            <span>📊</span>
            View Reports
          </button>
          <button className="dashboard-quick-action-btn">
            <span>⚙️</span>
            Settings
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;