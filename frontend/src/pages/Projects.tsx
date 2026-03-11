import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Library Management System",
    description: "A web app to manage college library books and students.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completed",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Attendance Tracker",
    description: "QR code based attendance system for classrooms.",
    tech: ["Python", "Flask", "MySQL"],
    status: "In Progress",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "DevTrack Platform",
    description: "College developer tracking platform — this project!",
    tech: ["React", "TypeScript", "Express"],
    status: "In Progress",
    github: "https://github.com",
  },
];

const statusColor: Record<string, { text: string; bg: string }> = {
  "Completed":   { text:"#16a34a", bg:"#dcfce7" },
  "In Progress": { text:"#d97706", bg:"#fef9c3" },
  "Planned":     { text:"#3b82f6", bg:"#dbeafe" },
};

function Projects() {
  return (
    <div style={{ fontFamily:"'Syne',sans-serif", background:"#f0fdf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .project-card { background:white; border-radius:20px; padding:24px; border:1.5px solid #e2e8f0; box-shadow:0 2px 12px rgba(0,0,0,0.04); transition:all 0.2s; }
        .project-card:hover { transform:translateY(-4px); box-shadow:0 8px 28px rgba(22,163,74,0.12); border-color:#bbf7d0; }
      `}</style>

      <Navbar />

      <div style={{ padding:"32px", maxWidth:"1100px", margin:"0 auto" }}>

        {/* Header */}
        <div style={{ background:"white", borderRadius:"24px", padding:"24px 32px", marginBottom:"24px", border:"1.5px solid #e2e8f0", boxShadow:"0 2px 12px rgba(0,0,0,0.04)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <h1 style={{ margin:0, fontSize:"26px", fontWeight:800, color:"#0f172a" }}>My Projects 🚀</h1>
            <p style={{ margin:"6px 0 0", fontSize:"14px", color:"#94a3b8", fontFamily:"'DM Sans',sans-serif" }}>
              {projects.length} projects total ·{" "}
              {projects.filter(p => p.status === "Completed").length} completed
            </p>
          </div>
          <button style={{ background:"linear-gradient(135deg,#16a34a,#15803d)", color:"white", border:"none", padding:"11px 22px", borderRadius:"13px", fontSize:"14px", fontWeight:700, cursor:"pointer", fontFamily:"'Syne',sans-serif", boxShadow:"0 4px 14px rgba(22,163,74,0.3)" }}>
            + Add Project
          </button>
        </div>

        {/* Project Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"18px" }}>
          {projects.map((p) => (
            <div key={p.id} className="project-card">

              {/* Title + Status */}
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"12px" }}>
                <h2 style={{ margin:0, fontSize:"17px", fontWeight:700, color:"#0f172a", lineHeight:1.4 }}>{p.title}</h2>
                <span style={{ fontSize:"12px", fontWeight:600, padding:"5px 12px", borderRadius:"999px", background:statusColor[p.status]?.bg, color:statusColor[p.status]?.text, whiteSpace:"nowrap", marginLeft:"10px", fontFamily:"'DM Sans',sans-serif" }}>
                  {p.status}
                </span>
              </div>

              {/* Description */}
              <p style={{ margin:"0 0 16px", fontSize:"14px", color:"#64748b", fontFamily:"'DM Sans',sans-serif", lineHeight:1.6 }}>
                {p.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"18px" }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ background:"#f0fdf4", color:"#16a34a", fontSize:"12px", padding:"5px 12px", borderRadius:"999px", border:"1px solid #bbf7d0", fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a href={p.github} target="_blank" rel="noreferrer"
                style={{ color:"#16a34a", fontSize:"14px", fontWeight:600, textDecoration:"none", fontFamily:"'DM Sans',sans-serif" }}>
                View on GitHub →
              </a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;