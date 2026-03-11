import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StatCard({ title, value, color, icon }: { title: string; value: string | number; color: string; icon: string }) {
  return (
    <div style={{ background:"white", borderRadius:"20px", padding:"20px 24px", border:"1.5px solid #e2e8f0", boxShadow:"0 2px 12px rgba(0,0,0,0.04)", transition:"all 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
        <p style={{ margin:0, fontSize:"13px", fontWeight:600, color:"#64748b", fontFamily:"'DM Sans',sans-serif" }}>{title}</p>
        <span style={{ fontSize:"22px" }}>{icon}</span>
      </div>
      <p style={{ margin:0, fontSize:"32px", fontWeight:800, color, fontFamily:"'Syne',sans-serif" }}>{value}</p>
    </div>
  );
}

function Dashboard() {
  const student = {
    name: "Madhan Kumar",
    regNo: "922523205082",
    year: "2nd Year",
    department: "CSE",
    section: "A",
    xp: 1240,
    rank: "Silver Coder",
    leetcode: { easy: 30, medium: 15, hard: 4 },
    github: { activeDays: 45, repos: 8 },
  };

  const totalSolved = student.leetcode.easy + student.leetcode.medium + student.leetcode.hard;

  return (
    <div style={{ fontFamily:"'Syne',sans-serif", background:"#f0fdf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/* Navbar */}
      <Navbar />

      {/* ── BODY ── */}
      <div style={{ padding:"32px", maxWidth:"1100px", margin:"0 auto" }}>

        {/* Profile Card */}
        <div style={{ background:"linear-gradient(135deg,#15803d,#16a34a,#22c55e)", borderRadius:"24px", padding:"28px 32px", marginBottom:"24px", position:"relative", overflow:"hidden", boxShadow:"0 8px 32px rgba(22,163,74,0.25)" }}>
          <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"220px", height:"220px", background:"rgba(255,255,255,0.08)", borderRadius:"50%" }} />
          <div style={{ position:"absolute", bottom:"-80px", right:"120px", width:"200px", height:"200px", background:"rgba(0,0,0,0.06)", borderRadius:"50%" }} />
          <div style={{ position:"relative", zIndex:2, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"16px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"18px" }}>
              <div style={{ width:"64px", height:"64px", background:"rgba(255,255,255,0.2)", borderRadius:"18px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"32px", border:"2px solid rgba(255,255,255,0.3)" }}>
                👨‍💻
              </div>
              <div>
                <p style={{ margin:0, color:"white", fontSize:"22px", fontWeight:800 }}>{student.name}</p>
                <p style={{ margin:0, color:"rgba(255,255,255,0.75)", fontSize:"13px", fontFamily:"'DM Sans',sans-serif", marginTop:"4px" }}>
                  Reg: {student.regNo} · {student.department} · {student.year} · Section {student.section}
                </p>
              </div>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:0, color:"#bbf7d0", fontSize:"13px", fontFamily:"'DM Sans',sans-serif" }}>Current Rank</p>
              <p style={{ margin:0, color:"white", fontSize:"20px", fontWeight:800 }}>{student.rank}</p>
              <p style={{ margin:0, color:"#bbf7d0", fontSize:"13px", fontFamily:"'DM Sans',sans-serif" }}>{student.xp} XP earned</p>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"16px", marginBottom:"24px" }}>
          <StatCard title="LeetCode Solved"   value={totalSolved}               color="#f59e0b" icon="💻" />
          <StatCard title="GitHub Active Days" value={student.github.activeDays} color="#16a34a" icon="🐙" />
          <StatCard title="Repositories"       value={student.github.repos}      color="#3b82f6" icon="📁" />
          <StatCard title="Total XP"           value={student.xp}                color="#8b5cf6" icon="⚡" />
        </div>

        {/* Bottom row */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>

          {/* LeetCode Breakdown */}
          <div style={{ background:"white", borderRadius:"20px", padding:"24px", border:"1.5px solid #e2e8f0", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>
            <p style={{ margin:"0 0 20px", fontSize:"16px", fontWeight:700, color:"#0f172a" }}>💻 LeetCode Breakdown</p>
            {[
              { label:"Easy",   value:student.leetcode.easy,   color:"#22c55e", bg:"#dcfce7", total:100 },
              { label:"Medium", value:student.leetcode.medium, color:"#f59e0b", bg:"#fef9c3", total:100 },
              { label:"Hard",   value:student.leetcode.hard,   color:"#ef4444", bg:"#fee2e2", total:50  },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom:"16px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13px", fontWeight:600, color:"#475569" }}>{item.label}</span>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13px", fontWeight:700, color:item.color }}>{item.value}</span>
                </div>
                <div style={{ background:item.bg, borderRadius:"999px", height:"8px", overflow:"hidden" }}>
                  <div style={{ width:`${(item.value/item.total)*100}%`, background:item.color, height:"100%", borderRadius:"999px", transition:"width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats */}
          <div style={{ background:"white", borderRadius:"20px", padding:"24px", border:"1.5px solid #e2e8f0", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>
            <p style={{ margin:"0 0 20px", fontSize:"16px", fontWeight:700, color:"#0f172a" }}>🐙 GitHub Stats</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
              {[
                { label:"Active Days",   value:student.github.activeDays, color:"#16a34a", bg:"#dcfce7" },
                { label:"Repositories",  value:student.github.repos,      color:"#3b82f6", bg:"#dbeafe" },
                { label:"Contributions", value:"342",                      color:"#8b5cf6", bg:"#ede9fe" },
                { label:"Streak",        value:"12 days",                  color:"#f59e0b", bg:"#fef9c3" },
              ].map((item) => (
                <div key={item.label} style={{ background:item.bg, borderRadius:"14px", padding:"14px" }}>
                  <p style={{ margin:0, fontFamily:"'DM Sans',sans-serif", fontSize:"12px", color:"#64748b" }}>{item.label}</p>
                  <p style={{ margin:0, fontSize:"22px", fontWeight:800, color:item.color, fontFamily:"'Syne',sans-serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;