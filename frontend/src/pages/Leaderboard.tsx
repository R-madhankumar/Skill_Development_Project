import Navbar from "../components/Navbar";

const students = [
  { rank:1, name:"Madhan Kumar", regNo:"922523205082", dept:"CSE", year:"2nd Year", section:"A", xp:1240, leetcode:49, github:45 },
  { rank:2, name:"Arun S",       regNo:"922523205045", dept:"CSE", year:"2nd Year", section:"B", xp:1100, leetcode:40, github:38 },
  { rank:3, name:"Priya R",      regNo:"922523205031", dept:"IT",  year:"3rd Year", section:"A", xp:980,  leetcode:35, github:30 },
  { rank:4, name:"Karthik M",    regNo:"922523205010", dept:"ECE", year:"1st Year", section:"C", xp:600,  leetcode:20, github:15 },
];

const medals: Record<number, string> = { 1:"🥇", 2:"🥈", 3:"🥉" };

const rankBg: Record<number, string> = {
  1: "linear-gradient(135deg,#fef9c3,#fef08a)",
  2: "linear-gradient(135deg,#f1f5f9,#e2e8f0)",
  3: "linear-gradient(135deg,#fff7ed,#fed7aa)",
};

function Leaderboard() {
  return (
    <div style={{ fontFamily:"'Syne',sans-serif", background:"#f0fdf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .lb-row { transition: all 0.2s; }
        .lb-row:hover { background:#f0fdf4 !important; transform:scale(1.01); }
      `}</style>

      <Navbar />

      <div style={{ padding:"32px", maxWidth:"1100px", margin:"0 auto" }}>

        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#15803d,#16a34a,#22c55e)", borderRadius:"24px", padding:"28px 32px", marginBottom:"24px", position:"relative", overflow:"hidden", boxShadow:"0 8px 32px rgba(22,163,74,0.25)" }}>
          <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"200px", height:"200px", background:"rgba(255,255,255,0.08)", borderRadius:"50%" }} />
          <h1 style={{ margin:0, color:"white", fontSize:"28px", fontWeight:800, position:"relative", zIndex:2 }}>🏆 Leaderboard</h1>
          <p style={{ margin:"6px 0 0", color:"rgba(255,255,255,0.75)", fontSize:"14px", fontFamily:"'DM Sans',sans-serif", position:"relative", zIndex:2 }}>
            Top performers ranked by XP · Updated live
          </p>
        </div>

        {/* Top 3 podium cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px", marginBottom:"24px" }}>
          {students.slice(0,3).map((s) => (
            <div key={s.rank} style={{ background:rankBg[s.rank] ?? "white", borderRadius:"20px", padding:"20px 24px", border:"1.5px solid #e2e8f0", boxShadow:"0 4px 16px rgba(0,0,0,0.06)", textAlign:"center" }}>
              <p style={{ margin:"0 0 6px", fontSize:"32px" }}>{medals[s.rank]}</p>
              <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#0f172a" }}>{s.name}</p>
              <p style={{ margin:"4px 0", fontSize:"12px", color:"#64748b", fontFamily:"'DM Sans',sans-serif" }}>{s.dept} · {s.year} · Sec {s.section}</p>
              <p style={{ margin:"8px 0 0", fontSize:"22px", fontWeight:800, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>{s.xp} XP</p>
            </div>
          ))}
        </div>

        {/* Full Table */}
        <div style={{ background:"white", borderRadius:"24px", padding:"24px", border:"1.5px solid #e2e8f0", boxShadow:"0 2px 12px rgba(0,0,0,0.04)", overflowX:"auto" }}>
          <p style={{ margin:"0 0 20px", fontSize:"16px", fontWeight:700, color:"#0f172a" }}>
            All Participants
            <span style={{ marginLeft:"10px", background:"#dcfce7", color:"#16a34a", fontSize:"13px", padding:"4px 12px", borderRadius:"999px", fontFamily:"'DM Sans',sans-serif" }}>
              {students.length} students
            </span>
          </p>

          <table style={{ width:"100%", borderCollapse:"collapse" }}>
            <thead>
              <tr style={{ background:"#f0fdf4" }}>
                {["Rank","Name","Reg No","Dept","Year","Section","XP","LeetCode","GitHub Days"].map((h) => (
                  <th key={h} style={{ padding:"12px 16px", textAlign:"left", fontSize:"12px", fontWeight:600, color:"#64748b", fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.rank} className="lb-row" style={{ borderTop:"1px solid #f1f5f9" }}>
                  <td style={{ padding:"14px 16px", fontSize:"20px" }}>{medals[s.rank] ?? `#${s.rank}`}</td>
                  <td style={{ padding:"14px 16px", fontWeight:700, color:"#0f172a", fontSize:"15px" }}>{s.name}</td>
                  <td style={{ padding:"14px 16px", color:"#94a3b8", fontSize:"13px", fontFamily:"'DM Sans',sans-serif" }}>{s.regNo}</td>
                  <td style={{ padding:"14px 16px", color:"#475569", fontFamily:"'DM Sans',sans-serif" }}>{s.dept}</td>
                  <td style={{ padding:"14px 16px", color:"#475569", fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap" }}>{s.year}</td>
                  <td style={{ padding:"14px 16px", color:"#475569", fontFamily:"'DM Sans',sans-serif" }}>{s.section}</td>
                  <td style={{ padding:"14px 16px", fontWeight:800, color:"#8b5cf6", fontFamily:"'Syne',sans-serif" }}>{s.xp}</td>
                  <td style={{ padding:"14px 16px", fontWeight:800, color:"#f59e0b", fontFamily:"'Syne',sans-serif" }}>{s.leetcode}</td>
                  <td style={{ padding:"14px 16px", fontWeight:800, color:"#16a34a", fontFamily:"'Syne',sans-serif" }}>{s.github}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Leaderboard;