import { useState } from "react";
import "./Topbar.css";

function Topbar({ title = "Dashboard" }) {
  const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <div className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <h1 className="topbar-title">{title}</h1>
        
        {/* Optional breadcrumb */}
        <div className="topbar-breadcrumb">
          <a href="/dashboard" className="topbar-breadcrumb-item">Home</a>
          <span className="topbar-breadcrumb-separator">/</span>
          <span className="topbar-breadcrumb-item active">{title}</span>
        </div>
      </div>

      <div className="topbar-right">
        {/* Optional search bar */}
        <div className="topbar-search">
          <input type="text" placeholder="Search..." />
          <span className="topbar-search-icon">🔍</span>
        </div>

        {/* Notification bell */}
        <div 
          className="topbar-notification"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <span>🔔</span>
          <span className="topbar-notification-badge">3</span>
        </div>

        {/* User info */}
        <div className="topbar-user">
          <div className="topbar-avatar">JD</div>
          <div className="topbar-user-info">
            <span className="topbar-user-name">John Doe</span>
            <span className="topbar-user-role">Admin</span>
          </div>
        </div>

        {/* Logout button */}
        <button className="topbar-logout">
          <span>🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;