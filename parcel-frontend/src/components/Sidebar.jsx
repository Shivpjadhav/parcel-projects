import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  
  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/dashboard">ParcelSys</Link>
        <span>🚚</span>
      </div>

      <nav className="sidebar-nav">
        <Link 
          to="/dashboard" 
          className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''}`}
        >
          <span className="sidebar-icon">📊</span>
          Dashboard
        </Link>

        <Link 
          to="/create" 
          className={`sidebar-link ${isActive('/create') ? 'active' : ''}`}
        >
          <span className="sidebar-icon">📦</span>
          Create Parcel
        </Link>

        <Link 
          to="/track" 
          className={`sidebar-link ${isActive('/track') ? 'active' : ''}`}
        >
          <span className="sidebar-icon">🔍</span>
          Track Parcel
        </Link>
      </nav>

      <div className="sidebar-divider"></div>

      {/* Optional user profile section */}
      <div className="sidebar-profile">
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-avatar">JD</div>
          <div className="sidebar-profile-details">
            <div className="sidebar-profile-name">John Doe</div>
            <div className="sidebar-profile-role">Premium User</div>
          </div>
        </div>
        <button className="sidebar-logout">
          <span>🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;