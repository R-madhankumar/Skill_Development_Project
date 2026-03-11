function StatCard({ title, value, color }: { title: string; value: string | number; color: string }) {
  return (
    <div className={`bg-gray-800 rounded-xl p-5 border-l-4 ${color}`}>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Dashboard() {
  const student = {
    name: "Madhan Kumar",
    xp: 1240,
    rank: "Silver Coder",
    leetcode: { easy: 30, medium: 15, hard: 4 },
    github: { activeDays: 45, repos: 8 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome back, {student.name} 👋</h1>
        <p className="text-gray-400">Rank: {student.rank} · XP: {student.xp}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard title="LeetCode Problems" value={student.leetcode.easy + student.leetcode.medium + student.leetcode.hard} color="border-yellow-400" />
        <StatCard title="GitHub Active Days" value={student.github.activeDays} color="border-green-400" />
        <StatCard title="Total XP" value={student.xp} color="border-blue-400" />
      </div>
      <div className="bg-gray-800 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">LeetCode Breakdown</h2>
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-green-400 text-xl font-bold">{student.leetcode.easy}</p>
            <p className="text-gray-400 text-sm">Easy</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-400 text-xl font-bold">{student.leetcode.medium}</p>
            <p className="text-gray-400 text-sm">Medium</p>
          </div>
          <div className="text-center">
            <p className="text-red-400 text-xl font-bold">{student.leetcode.hard}</p>
            <p className="text-gray-400 text-sm">Hard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;