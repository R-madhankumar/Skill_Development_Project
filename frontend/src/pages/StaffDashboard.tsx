import { useNavigate } from "react-router-dom";

// Dummy participants data — Week 2 this comes from backend
const participants = [
  { regNo: "922523205082", name: "Madhan Kumar", dept: "CSE", year: "2nd Year", section: "A", leetcode: 49, github: 45, projects: 3, xp: 1240 },
  { regNo: "922523205045", name: "Arun S",       dept: "CSE", year: "2nd Year", section: "B", leetcode: 40, github: 38, projects: 2, xp: 1100 },
  { regNo: "922523205031", name: "Priya R",      dept: "IT",  year: "3rd Year", section: "A", leetcode: 35, github: 30, projects: 4, xp: 980  },
  { regNo: "922523205010", name: "Karthik M",    dept: "ECE", year: "1st Year", section: "C", leetcode: 20, github: 15, projects: 1, xp: 600  },
];

function StaffDashboard() {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/staff-login");
  };

  // Download Excel — converts data to CSV format
  const downloadExcel = () => {
    const headers = ["Reg No", "Name", "Department", "Year", "Section", "LeetCode", "GitHub Days", "Projects", "XP"];
    const rows = participants.map((p) => [
      p.regNo, p.name, p.dept, p.year, p.section,
      p.leetcode, p.github, p.projects, p.xp,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    // Create a download link and click it automatically
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "devtrack_students_report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">

      {/* Header */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-100 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-green-700 text-white text-2xl w-14 h-14 rounded-2xl flex items-center justify-center shadow">
            🔐
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>
            <p className="text-gray-400 text-sm">View only — no modifications allowed</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-50 text-red-500 hover:bg-red-100 px-4 py-2 rounded-xl text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-green-500">{participants.length}</p>
          <p className="text-gray-400 text-sm mt-1">Total Participants</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-500">
            {participants.reduce((sum, p) => sum + p.projects, 0)}
          </p>
          <p className="text-gray-400 text-sm mt-1">Total Projects</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-yellow-500">
            {Math.max(...participants.map((p) => p.leetcode))}
          </p>
          <p className="text-gray-400 text-sm mt-1">Top LeetCode Score</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-purple-500">
            {Math.max(...participants.map((p) => p.xp))}
          </p>
          <p className="text-gray-400 text-sm mt-1">Highest XP</p>
        </div>
      </div>

      {/* Participants Table */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800 font-bold text-lg">
            Participants List
            <span className="ml-2 bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
              {participants.length} students
            </span>
          </h2>
          {/* Download Button */}
          <button
            onClick={downloadExcel}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
          >
            ⬇️ Download Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-green-50 text-gray-500 text-sm">
                <th className="px-4 py-3 rounded-l-xl">Reg No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Dept</th>
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3">Section</th>
                <th className="px-4 py-3">LeetCode</th>
                <th className="px-4 py-3">GitHub Days</th>
                <th className="px-4 py-3">Projects</th>
                <th className="px-4 py-3 rounded-r-xl">XP</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((p) => (
                <tr key={p.regNo} className="border-t border-green-50 hover:bg-green-50 transition">
                  <td className="px-4 py-3 text-gray-400 text-sm">{p.regNo}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">{p.name}</td>
                  <td className="px-4 py-3 text-gray-600">{p.dept}</td>
                  <td className="px-4 py-3 text-gray-600">{p.year}</td>
                  <td className="px-4 py-3 text-gray-600">{p.section}</td>
                  <td className="px-4 py-3 text-yellow-500 font-bold">{p.leetcode}</td>
                  <td className="px-4 py-3 text-green-500 font-bold">{p.github}</td>
                  <td className="px-4 py-3 text-blue-500 font-bold">{p.projects}</td>
                  <td className="px-4 py-3 text-purple-500 font-bold">{p.xp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default StaffDashboard;