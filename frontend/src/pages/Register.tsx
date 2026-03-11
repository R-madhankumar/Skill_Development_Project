import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const [form, setForm] = useState({
    name: "", regNo: "", email: "",
    password: "", department: "", year: "", section: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]               = useState("");

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.name || !form.regNo || !form.email || !form.password || !form.department || !form.year || !form.section) {
      setError("Please fill all fields"); return;
    }
    if (form.regNo.length !== 12 || isNaN(Number(form.regNo))) {
      setError("Register number must be exactly 12 digits"); return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email"); return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters"); return;
    }
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify({ ...form, role: "student" }));
    navigate("/dashboard");
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }} className="min-h-screen flex">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .form-input {
          font-family: 'DM Sans', sans-serif;
          width: 100%; border: 1.5px solid #e2e8f0;
          background: #f8fafc; color: #1e293b;
          padding: 13px 18px; border-radius: 14px;
          outline: none; transition: all 0.2s; font-size: 15px;
        }
        .form-input:focus {
          border-color: #16a34a; background: white;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.08);
        }
        .form-select {
          font-family: 'DM Sans', sans-serif;
          width: 100%; border: 1.5px solid #e2e8f0;
          background: #f8fafc; color: #1e293b;
          padding: 13px 14px; border-radius: 14px;
          outline: none; transition: all 0.2s; font-size: 14px;
          appearance: none; cursor: pointer;
        }
        .form-select:focus {
          border-color: #16a34a; background: white;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.08);
        }
        .fade-up { opacity:0; transform:translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .fade-up.show { opacity:1; transform:translateY(0); }
        .register-btn {
          width: 100%;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 16px; padding: 15px;
          border-radius: 14px; border: none; cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(22,163,74,0.35);
        }
        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.45);
        }
        .green-panel { background: linear-gradient(145deg, #15803d 0%, #16a34a 40%, #22c55e 100%); }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float1{animation:float  6s ease-in-out infinite;}
        .float2{animation:float2 8s ease-in-out infinite;}
      `}</style>

      {/* ── LEFT PANEL ── */}
      <div className="green-panel hidden lg:flex w-[45%] flex-col items-center justify-center relative overflow-hidden px-14">
        <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"340px", height:"340px", background:"rgba(255,255,255,0.07)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", bottom:"-120px", left:"-80px", width:"400px", height:"400px", background:"rgba(0,0,0,0.07)", borderRadius:"50%" }} />

        {/* Floating hints */}
        <div className="float1" style={{ position:"absolute", top:"14%", right:"6%", background:"rgba(255,255,255,0.13)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"14px", padding:"12px 16px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>🎓 Join 200+ students</p>
        </div>
        <div className="float2" style={{ position:"absolute", bottom:"16%", right:"5%", background:"rgba(255,255,255,0.13)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"14px", padding:"12px 16px", backdropFilter:"blur(8px)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"white", fontSize:"13px", margin:0 }}>🚀 Track your progress</p>
        </div>

        {/* Logo + text */}
        <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"28px" }}>
            <div style={{ position:"relative" }}>
              <div style={{ width:"68px", height:"68px", background:"white", borderRadius:"20px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 12px 40px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize:"34px", fontWeight:900, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>D</span>
              </div>
              <div style={{ position:"absolute", top:"-5px", right:"-5px", width:"20px", height:"20px", background:"#bbf7d0", borderRadius:"50%", border:"3px solid #15803d" }} />
            </div>
            <div>
              <p style={{ margin:0, color:"white", fontSize:"38px", fontWeight:800, letterSpacing:"-1px", lineHeight:1 }}>
                Dev<span style={{ color:"#bbf7d0" }}>Track</span>
              </p>
              <p style={{ margin:0, color:"rgba(255,255,255,0.7)", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif" }}>
                College Dev Platform
              </p>
            </div>
          </div>

          <p style={{ color:"white", fontSize:"20px", fontWeight:700, textAlign:"center", lineHeight:1.6, marginBottom:"32px", maxWidth:"320px" }}>
            Create your account and start<br />
            <span style={{ color:"#bbf7d0" }}>building your dev profile.</span>
          </p>

          {/* Steps */}
          {[["01","Fill your details"],["02","Connect LeetCode & GitHub"],["03","Appear on leaderboard"]].map(([num, text]) => (
            <div key={num} style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"16px", width:"100%", maxWidth:"300px" }}>
              <div style={{ width:"36px", height:"36px", background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ color:"white", fontWeight:800, fontSize:"13px", fontFamily:"'Syne',sans-serif" }}>{num}</span>
              </div>
              <p style={{ margin:0, color:"rgba(255,255,255,0.85)", fontSize:"14px", fontFamily:"'DM Sans',sans-serif" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-[55%] bg-white flex items-center justify-center p-8 py-10">
        <div style={{ width:"100%", maxWidth:"460px" }}>

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-6 justify-center">
            <div style={{ width:"42px", height:"42px", background:"#16a34a", borderRadius:"13px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"white", fontSize:"21px", fontWeight:900, fontFamily:"'Syne',sans-serif" }}>D</span>
            </div>
            <p style={{ margin:0, fontSize:"24px", fontWeight:800, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>DevTrack</p>
          </div>

          {/* Heading */}
          <div className={`fade-up ${loaded ? "show":""}`} style={{ transitionDelay:"0ms", marginBottom:"28px" }}>
            <p style={{ margin:0, fontSize:"12px", fontWeight:600, color:"#16a34a", letterSpacing:"2px", textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif", marginBottom:"8px" }}>
              New Account
            </p>
            <h1 style={{ margin:0, fontSize:"32px", fontWeight:800, color:"#0f172a", letterSpacing:"-1px" }}>
              Create Account ✨
            </h1>
            <p style={{ margin:"8px 0 0", color:"#94a3b8", fontSize:"14px", fontFamily:"'DM Sans',sans-serif" }}>
              Register to join DevTrack
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:"12px", padding:"11px 16px", marginBottom:"16px" }}>
              <p style={{ margin:0, color:"#ef4444", fontSize:"13px", fontFamily:"'DM Sans',sans-serif" }}>{error}</p>
            </div>
          )}

          {/* Full Name */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"80ms", marginBottom:"14px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Full Name</label>
            <input name="name" className="form-input" type="text" placeholder="e.g. Madhan Kumar" value={form.name} onChange={handleChange} />
          </div>

          {/* Register Number */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"130ms", marginBottom:"14px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Register Number</label>
            <input name="regNo" className="form-input" type="text" placeholder="12 digit number e.g. 922523205082" value={form.regNo} onChange={handleChange} />
          </div>

          {/* Email */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"170ms", marginBottom:"14px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Email</label>
            <input name="email" className="form-input" type="email" placeholder="e.g. madhan@college.edu" value={form.email} onChange={handleChange} />
          </div>

          {/* Dept / Year / Section */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"210ms", marginBottom:"14px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px" }}>
            <div>
              <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Department</label>
              <select name="department" className="form-select" value={form.department} onChange={handleChange}>
                <option value="">Select</option>
                {["CSE","IT","ECE","EEE","MECH","CIVIL"].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Year</label>
              <select name="year" className="form-select" value={form.year} onChange={handleChange}>
                <option value="">Select</option>
                {["1st Year","2nd Year","3rd Year","4th Year"].map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Section</label>
              <select name="section" className="form-select" value={form.section} onChange={handleChange}>
                <option value="">Select</option>
                {["A","B","C","D"].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Password */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"250ms", marginBottom:"24px" }}>
            <label style={{ display:"block", fontSize:"13px", fontWeight:600, color:"#475569", marginBottom:"7px", fontFamily:"'DM Sans',sans-serif" }}>Password</label>
            <div style={{ position:"relative" }}>
              <input
                name="password" className="form-input"
                type={showPassword ? "text" : "password"}
                placeholder="Min 6 characters"
                value={form.password} onChange={handleChange}
                style={{ paddingRight:"50px" }}
              />
              <button onClick={() => setShowPassword(!showPassword)}
                style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:"20px", color:"#94a3b8" }}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <div className={`fade-up ${loaded?"show":""}`} style={{ transitionDelay:"290ms" }}>
            <button className="register-btn" onClick={handleRegister}>
              Create Account →
            </button>
          </div>

          {/* Link to login */}
          <p style={{ textAlign:"center", color:"#94a3b8", fontSize:"14px", fontFamily:"'DM Sans',sans-serif", marginTop:"20px" }}>
            Already have an account?{" "}
            <span onClick={() => navigate("/")} style={{ color:"#16a34a", fontWeight:700, cursor:"pointer" }}>
              Login here
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Register;