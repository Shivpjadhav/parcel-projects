import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Layout.css";

function Layout({ children, title = "Dashboard", showStats = false }) {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Simulate loading state for page transitions
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div className="layout-container">
      {/* Loading overlay */}
      {loading && (
        <div className="layout-loading">
          <div className="layout-loading-spinner"></div>
        </div>
      )}

      <Sidebar />
      
      <div className="layout-main">
        <Topbar title={title} />
        
        <div className="layout-content">
          {/* Optional stats cards */}
          {showStats && (
            <div className="layout-stats-container">
              <div className="layout-stat-card">
                <div className="layout-stat-icon">📦</div>
                <div className="layout-stat-info">
                  <h3>Total Parcels</h3>
                  <p>1,234</p>
                </div>
              </div>
              <div className="layout-stat-card">
                <div className="layout-stat-icon">🚚</div>
                <div className="layout-stat-info">
                  <h3>In Transit</h3>
                  <p>567</p>
                </div>
              </div>
              <div className="layout-stat-card">
                <div className="layout-stat-icon">✅</div>
                <div className="layout-stat-info">
                  <h3>Delivered</h3>
                  <p>890</p>
                </div>
              </div>
              <div className="layout-stat-card">
                <div className="layout-stat-icon">⏳</div>
                <div className="layout-stat-info">
                  <h3>Pending</h3>
                  <p>123</p>
                </div>
              </div>
            </div>
          )}

          {/* Main content with card wrapper */}
          <div className="layout-content-card">
            <div className="layout-page-wrapper">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (optional) */}
      <div className="layout-fab" title="Quick Actions">
        +
      </div>

      {/* Toast notification container (optional) */}
      {showToast && (
        <div className="layout-toast-container">
          <div className="layout-toast success">
            <span>✅</span>
            <span>Operation completed successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;