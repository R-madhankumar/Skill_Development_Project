import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

// This component wraps any page that needs protection
// role = "student" means only students can enter
// role = "staff" means only staff can enter

function ProtectedRoute({ children, role }: { children: ReactNode; role: "student" | "staff" }) {

  // Get the logged in user info from localStorage
  const userStr = localStorage.getItem("user");
  const token   = localStorage.getItem("token");

  // If not logged in at all → send to login page
  if (!token || !userStr) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(userStr);

  // If student tries to open staff page → block and send to their dashboard
  if (role === "staff" && user.role !== "staff") {
    return <Navigate to="/dashboard" />;
  }

  // If staff tries to open student page → block and send to staff dashboard
  if (role === "student" && user.role !== "student") {
    return <Navigate to="/staff-dashboard" />;
  }

  // All good → show the page
  return <>{children}</>;
}

export default ProtectedRoute;