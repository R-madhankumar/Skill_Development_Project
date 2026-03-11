import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import Projects from "./pages/Projects";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes — anyone can visit */}
        <Route path="/"              element={<Login />} />
        <Route path="/register"      element={<Register />} />
        <Route path="/staff-login"   element={<StaffLogin />} />

        {/* Student only routes */}
        <Route path="/dashboard"     element={<ProtectedRoute role="student"><Dashboard /></ProtectedRoute>} />
        <Route path="/leaderboard"   element={<ProtectedRoute role="student"><Leaderboard /></ProtectedRoute>} />
        <Route path="/projects"      element={<ProtectedRoute role="student"><Projects /></ProtectedRoute>} />

        {/* Staff only routes */}
        <Route path="/staff-dashboard" element={<ProtectedRoute role="staff"><StaffDashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;