import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-title">KYC</span>

        <div className="page-actions">
          <Link className="btn" to="/">
            Dashboard
          </Link>

          <Link className="btn" to="/users">
            Users
          </Link>

          <Link className="btn" to="/change-password">
            Change password
          </Link>

          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
