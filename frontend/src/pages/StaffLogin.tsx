import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const STAFF_SECRET_CODE = "DEVTRACK2025";

function StaffLogin() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const [form, setForm] = useState({
    email: "", password: "", secretCode: "",
  });

  const [showPassword, setShowPassword]     = useState(false);
  const [showSecret, setShowSecret]         = useState(false);
  const [error, setError]                   = useState("");

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password || !form.secretCode) {
      setError("Please fill all fields"); return;
    }
    if (form.secretCode !== STAFF_SECRET_CODE) {
      setError("❌ Invalid secret code. Staff access denied."); return;
    }
    localStorage.setItem("token", "staff-dummy-token");
    localStorage.setItem("user", JSON.stringify({ email: form.email, role: "staff", name: "Staff Member" }));
    navigate("/staff-dashboard");
  };

  return (
    <div style={{ fontFamily:"'Syne',sans-serif" }} className="min-h-screen flex">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .form-input {
          font-family:'DM Sans',sans-serif; width:100%;
          border:1.5px solid #e2e8f0; background:#f8fafc; color:#1e293b;
          padding:14px 18px; border-radius:14px; outline:none;
          transition:all 0.2s; font-size:15px;
        }
        .form-input:focus {
          border-color:#15803d; background:white;
          box-shadow:0 0 0 4px rgba(21,128,61,0.08);
        }
        .fade-up { opacity:0; transform:translateY(20px); transition:opacity 0.5s ease,transform 0.5s ease; }
        .fade-up.show { opacity:1; transform:translateY(0); }
        .staff-btn {
          width:100%;
          background:linear-gradient(135deg,#15803d,#166534);
          color:white; font-family:'Syne',sans-serif; font-weight:700;
          font-size:16px; padding:15px; border-radius:14px; border:none;
          cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 20px rgba(21,128,61,0.4);
        }
        .staff-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(21,128,61,0.5); }
        .dark-panel { background:linear-gradient(145deg,#14532d 0%,#15803d 50%,#166534 100%); }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float1{animation:float  6s ease-in-out infinite;}
        .float2{animation:float2 8s ease-in-out infinite;}
      `}</style>

      {/* ── LEFT PANEL ── */}
      <div className="dark-panel hidden lg:flex w-[45%] flex-col items-center justify-center relative overflow-hidden px-14">
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"340px", height:"340px", background:"rgba(255,255,255,0.05)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", bottom:"-120px", left:"-80px", width:"400px", height:"400px", background:"rgba(0,0,0,0.1)", borderRadius:"50%" }} />

        {/* Floating cards */}
        <div className="float1" style={{ position:"absolute", top:"14%", right:"6%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"14px", padding:"12px 16px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>👁️ View only access</p>
        </div>
        <div className="float2" style={{ position:"absolute", bottom:"16%", right:"5%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"14px", padding:"12px 16px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>📊 Download reports</p>
        </div>

        {/* Logo */}
        <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"28px" }}>
            <div style={{ position:"relative" }}>
              <div style={{ width:"68px", height:"68px", background:"white", borderRadius:"20px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 12px 40px rgba(0,0,0,0.2)" }}>
                <span style={{ fontSize:"32px" }}>🔐</span>
              </div>
              <div style={{ position:"absolute", top:"-5px", right:"-5px", width:"20px", height:"20px", background:"#bbf7d0", borderRadius:"50%", border:"3px solid #14532d" }} />
            </div>
            <div>
              <p style={{ margin:0, color:"white", fontSize:"38px", fontWeight:800, letterSpacing:"-1px", lineHeight:1 }}>
                Staff<span style={{ color:"#86efac" }}>Portal</span>
              </p>
              <p style={{ margin:0, color:"rgba(255,255,255,0.6)", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif" }}>
                DevTrack · Restricted Access
              </p>
            </div>
          </div>

          <p style={{ color:"white", fontSize:"18px", fontWeight:600, textAlign:"center", lineHeight:1.6, marginBottom:"36px", maxWidth:"300px" }}>
            Authorized staff can view<br />
            <span style={{ color:"#86efac" }}>student progress & reports.</span>
          </p>

          {/* Access rules */}
          {[
            ["✅","View all student profiles"],
            ["✅","Download Excel reports"],
            ["✅","View leaderboard & stats"],
            ["❌","Cannot modify any data"],
          ].map(([icon, text]) => (
            <div key={text} style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"14px", width:"100%", maxWidth:"280px" }}>
              <span style={{ fontSize:"16px" }}>{icon}</span>
              <p style={{ margin:0, color:"rgba(255,255,255,0.8)", fontSize:"14px", fontFamily:"'DM Sans',sans-serif" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-[55%] bg-white flex items-center justify-center p-10">
        <div style={{ width:"100%", maxWidth:"420px" }}>

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8 justify-center">
            <div style={{ width:"42px", height:"42px", background:"#15803d", borderRadius:"13px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"20px" }}>🔐</span>
            </div>
            <p style={{ margin:0, fontSize:"24px", fontWeight:800, color:"#15803d", fontFamily:"'Syne',sans-serif" }}>Staff Portal</p>
          </div>

          {/* Heading */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"0ms", marginBottom:"32px" }}>
            <p style={{ margin:0, fontSize:"12px", fontWeight:600, color:"#15803d", letterSpacing:"2px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif", marginBottom:"8px" }}>
              Restricted Access
            </p>
            <h1 style={{ margin:0, fontSize:"34px", fontWeight:800, color:"#0f172a", letterSpacing:"-1px" }}>
              Staff Login 🔐
            </h1>
            <p style={{ margin:"8px 0 0", color:"#94a3b8", fontSize:"14px", fontFamily:"'DM Sans',sans-serif" }}>
              Enter your credentials and secret code
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:"12px", padding:"11px 16px", marginBottom:"16px" }}>
              <p style={{ margin:0, color:"#ef4444", fontSize:"13px", fontFamily:"'DM Sans',sans-serif" }}>{error}</p>
            </div>
          )}

          {/* Email */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"80ms", marginBottom:"14px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Staff Email</label>
            <input name="email" className="form-input" type="email" placeholder="professor@college.edu" value={form.email} onChange={handleChange} />
          </div>

          {/* Password */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"140ms", marginBottom:"14px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Password</label>
            <div style={{ position:"relative" }}>
              <input name="password" className="form-input" type={showPassword?"text":"password"} placeholder="Enter your password" value={form.password} onChange={handleChange} style={{ paddingRight:"50px" }} />
              <button onClick={() => setShowPassword(!showPassword)} style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:"20px", color:"#94a3b8" }}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Secret Code */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"200ms", marginBottom:"28px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>
              Secret Code
              <span style={{ color:"#94a3b8", fontWeight:400, marginLeft:"6px" }}>(given by admin only)</span>
            </label>
            <div style={{ position:"relative" }}>
              <input name="secretCode" className="form-input" type={showSecret?"text":"password"} placeholder="Enter staff secret code" value={form.secretCode} onChange={handleChange} style={{ paddingRight:"50px" }} />
              <button onClick={() => setShowSecret(!showSecret)} style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:"20px", color:"#94a3b8" }}>
                {showSecret ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"260ms" }}>
            <button className="staff-btn" onClick={handleLogin}>
              Login as Staff →
            </button>
          </div>

          {/* Back link */}
          <p style={{ textAlign:"center", color:"#94a3b8", fontSize:"14px", fontFamily:"'DM Sans',sans-serif", marginTop:"20px" }}>
            Are you a student?{" "}
            <span onClick={() => navigate("/")} style={{ color:"#16a34a", fontWeight:700, cursor:"pointer" }}>
              Student Login
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default StaffLogin;