import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate  = useNavigate();
  const location  = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const navItems = [
    { label: "Dashboard",   path: "/dashboard",   icon: "🏠" },
    { label: "Projects",    path: "/projects",    icon: "🚀" },
    { label: "Leaderboard", path: "/leaderboard", icon: "🏆" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .nav-item { font-family:'DM Sans',sans-serif; display:flex; align-items:center; gap:8px; padding:10px 16px; border-radius:12px; cursor:pointer; font-size:14px; font-weight:500; color:#475569; transition:all 0.2s; }
        .nav-item:hover { background:#f0fdf4; color:#16a34a; }
        .nav-item.active { background:#dcfce7; color:#16a34a; font-weight:600; }
      `}</style>
      <div style={{ background:"white", borderBottom:"1px solid #e2e8f0", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px", position:"sticky", top:0, zIndex:50, boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>

        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px", cursor:"pointer" }} onClick={() => navigate("/dashboard")}>
          <div style={{ width:"38px", height:"38px", background:"#16a34a", borderRadius:"11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ color:"white", fontSize:"20px", fontWeight:900, fontFamily:"'Syne',sans-serif" }}>D</span>
          </div>
          <p style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>Dev<span style={{ color:"#0f172a" }}>Track</span></p>
        </div>

        {/* Nav Links */}
        <div style={{ display:"flex", gap:"4px" }}>
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
        </div>

        {/* Logout */}
        <button onClick={handleLogout} style={{ fontFamily:"'DM Sans',sans-serif", background:"#fef2f2", color:"#ef4444", border:"none", padding:"9px 18px", borderRadius:"11px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>
          Logout
        </button>

      </div>
    </>
  );
}

export default Navbar;
