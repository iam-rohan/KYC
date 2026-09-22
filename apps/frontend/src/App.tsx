import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { AuthProvider } from "./auth/AuthContext";
import { RequireAuth } from "./auth/RequireAuth";
import { ChangePasswordPage } from "./pages/auth/ChangePasswordPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { UserDetailsPage } from "./pages/user/UserDetailsPage";
import { UserFormPage } from "./pages/user/UserFormPage";
import { UsersListPage } from "./pages/user/UsersListPage";
import DashBoard from "./pages/home/DashBoard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/new" element={<UserFormPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
          <Route path="/users/:id/edit" element={<UserFormPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
        </Route>

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
