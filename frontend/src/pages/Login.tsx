import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [regNo, setRegNo]               = useState("");
  const [password, setPassword]         = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]               = useState("");
  const [loaded, setLoaded]             = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleLogin = () => {
    if (regNo && password) {
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("user", JSON.stringify({ regNo, role: "student" }));
      navigate("/dashboard");
    } else {
      setError("Please enter register number and password");
    }
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }} className="min-h-screen flex">

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .form-input {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #1e293b;
          padding: 14px 18px;
          border-radius: 14px;
          outline: none;
          transition: all 0.2s;
          font-size: 15px;
        }
        .form-input:focus {
          border-color: #16a34a;
          background: white;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.08);
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .login-btn {
          width: 100%;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 16px;
          padding: 15px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(22,163,74,0.35);
          letter-spacing: 0.5px;
        }
        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.45);
        }
        .login-btn:active {
          transform: translateY(0);
        }
        .tag-pill {
          background: rgba(255,255,255,0.15);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(4px);
        }
        .stat-box {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          padding: 16px 22px;
          text-align: center;
          backdrop-filter: blur(8px);
        }
        .green-panel {
          background: linear-gradient(145deg, #15803d 0%, #16a34a 40%, #22c55e 100%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(-2deg); }
        }
        .float1 { animation: float  6s ease-in-out infinite; }
        .float2 { animation: float2 8s ease-in-out infinite; }
      `}</style>

      {/* ── LEFT PANEL ── */}
      <div className="green-panel hidden lg:flex w-[55%] flex-col items-center justify-center relative overflow-hidden px-16">

        {/* Decorative blobs */}
        <div style={{ position:"absolute", top:"-120px", right:"-120px", width:"380px", height:"380px", background:"rgba(255,255,255,0.08)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", bottom:"-140px", left:"-100px", width:"440px", height:"440px", background:"rgba(0,0,0,0.08)", borderRadius:"50%" }} />

        {/* Floating code cards */}
        <div className="float1" style={{ position:"absolute", top:"12%", right:"8%", background:"rgba(255,255,255,0.13)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"16px", padding:"14px 18px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>🏆 Rank <strong>#1</strong> this week</p>
        </div>
        <div className="float2" style={{ position:"absolute", bottom:"18%", right:"6%", background:"rgba(255,255,255,0.13)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"16px", padding:"14px 18px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>✅ 12 problems solved today</p>
        </div>

        {/* Logo */}
        <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"32px" }}>
            {/* Logo mark */}
            <div style={{ position:"relative" }}>
              <div style={{ width:"72px", height:"72px", background:"white", borderRadius:"22px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 12px 40px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize:"36px", fontWeight:900, color:"#16a34a", fontFamily:"'Syne',sans-serif", lineHeight:1 }}>D</span>
              </div>
              <div style={{ position:"absolute", top:"-6px", right:"-6px", width:"22px", height:"22px", background:"#bbf7d0", borderRadius:"50%", border:"3px solid #15803d" }} />
              <div style={{ position:"absolute", bottom:"-4px", left:"-4px", width:"14px", height:"14px", background:"#4ade80", borderRadius:"50%" }} />
            </div>
            <div>
              <p style={{ margin:0, color:"white", fontSize:"42px", fontWeight:800, letterSpacing:"-1px", lineHeight:1 }}>
                Dev<span style={{ color:"#bbf7d0" }}>Track</span>
              </p>
              <p style={{ margin:0, color:"rgba(255,255,255,0.7)", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif" }}>
                College Dev Platform
              </p>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display:"flex", gap:"10px", flexWrap:"wrap", justifyContent:"center", marginBottom:"40px" }}>
            {["LeetCode", "GitHub", "Projects", "Leaderboard"].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>

          {/* Tagline */}
          <p style={{ color:"white", fontSize:"22px", fontWeight:700, textAlign:"center", lineHeight:1.5, marginBottom:"40px", maxWidth:"360px" }}>
            Track your coding journey,<br />
            <span style={{ color:"#bbf7d0" }}>compete with your peers.</span>
          </p>

          {/* Stats */}
          <div style={{ display:"flex", gap:"16px" }}>
            {[["200+","Students"],["50+","Projects"],["10k+","Problems"]].map(([val, label]) => (
              <div key={label} className="stat-box">
                <p style={{ margin:0, color:"white", fontSize:"26px", fontWeight:800, fontFamily:"'Syne',sans-serif" }}>{val}</p>
                <p style={{ margin:0, color:"rgba(255,255,255,0.7)", fontSize:"12px", fontFamily:"'DM Sans',sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-[45%] bg-white flex items-center justify-center p-10">
        <div style={{ width:"100%", maxWidth:"400px" }}>

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8 justify-center">
            <div style={{ width:"44px", height:"44px", background:"#16a34a", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"white", fontSize:"22px", fontWeight:900, fontFamily:"'Syne',sans-serif" }}>D</span>
            </div>
            <p style={{ margin:0, fontSize:"26px", fontWeight:800, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>DevTrack</p>
          </div>

          {/* Heading */}
          <div className={`fade-up ${loaded ? "show" : ""}`} style={{ transitionDelay:"0ms", marginBottom:"32px" }}>
            <p style={{ margin:0, fontSize:"13px", fontWeight:600, color:"#16a34a", letterSpacing:"2px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif", marginBottom:"8px" }}>
              Student Portal
            </p>
            <h1 style={{ margin:0, fontSize:"36px", fontWeight:800, color:"#0f172a", lineHeight:1.15, letterSpacing:"-1px" }}>
              Welcome<br />Back 👋
            </h1>
            <p style={{ margin:"10px 0 0", color:"#94a3b8", fontSize:"15px", fontFamily:"'DM Sans',sans-serif" }}>
              Sign in to continue your journey
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:"12px", padding:"12px 16px", marginBottom:"16px" }}>
              <p style={{ margin:0, color:"#ef4444", fontSize:"14px", fontFamily:"'DM Sans',sans-serif" }}>{error}</p>
            </div>
          )}

          {/* Register No */}
          <div className={`fade-up ${loaded ? "show" : ""}`} style={{ transitionDelay:"100ms", marginBottom:"16px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"8px", fontFamily:"'DM Sans',sans-serif" }}>
              Register Number
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. 922523205082"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className={`fade-up ${loaded ? "show" : ""}`} style={{ transitionDelay:"180ms", marginBottom:"28px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"8px", fontFamily:"'DM Sans',sans-serif" }}>
              Password
            </label>
            <div style={{ position:"relative" }}>
              <input
                className="form-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight:"50px" }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:"20px", color:"#94a3b8" }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className={`fade-up ${loaded ? "show" : ""}`} style={{ transitionDelay:"260ms" }}>
            <button className="login-btn" onClick={handleLogin}>
              Login to DevTrack →
            </button>
          </div>

          {/* Divider */}
          <div style={{ display:"flex", alignItems:"center", gap:"12px", margin:"24px 0" }}>
            <div style={{ flex:1, height:"1px", background:"#e2e8f0" }} />
            <span style={{ color:"#cbd5e1", fontSize:"12px", fontFamily:"'DM Sans',sans-serif" }}>OR</span>
            <div style={{ flex:1, height:"1px", background:"#e2e8f0" }} />
          </div>

          {/* Links */}
          <div className={`fade-up ${loaded ? "show" : ""}`} style={{ transitionDelay:"320ms", display:"flex", justifyContent:"space-between" }}>
            <span
              onClick={() => navigate("/register")}
              style={{ color:"#16a34a", fontWeight:700, fontSize:"14px", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}
            >
              + Create Account
            </span>
            <span
              onClick={() => navigate("/staff-login")}
              style={{ color:"#94a3b8", fontSize:"14px", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}
            >
              Staff Login →
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;