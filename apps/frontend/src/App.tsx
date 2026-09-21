import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { AuthProvider, useAuth } from './auth/AuthContext';
import { RequireAuth } from './auth/RequireAuth';
import { ChangePasswordPage } from './pages/auth/ChangePasswordPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { UserDetailsPage } from './pages/user/UserDetailsPage';
import { UserFormPage } from './pages/user/UserFormPage';
import { UsersListPage } from './pages/user/UsersListPage';

function AppLayout() {
  const { logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-title">KYC</span>
        <div className="page-actions">
          <Link className="btn" to="/change-password">
            Change password
          </Link>
          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route path="/" element={<UsersListPage />} />
          <Route path="/users/new" element={<UserFormPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
          <Route path="/users/:id/edit" element={<UserFormPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
