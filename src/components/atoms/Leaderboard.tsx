
interface LeaderboardUser {
  username: string;
  avatar: string;
  totalPoints: number;
  levelName: string;
}

const topUsers: LeaderboardUser[] = [
  { username: "Octavia Halim", avatar: "https://i.pravatar.cc/50?img=12", totalPoints: 1250, levelName: "Waste Wizard" },
  { username: "Bimo Jatmiko", avatar: "https://i.pravatar.cc/50?img=23", totalPoints: 1180, levelName: "Eco Warrior" },
  { username: "Paramita Sheila", avatar: "https://i.pravatar.cc/50?img=34", totalPoints: 1105, levelName: "Recycler" },
  { username: "Julius Novachrono", avatar: "https://i.pravatar.cc/50?img=45", totalPoints: 980, levelName: "Green Thumb" },
  { username: "Monica", avatar: "https://i.pravatar.cc/50?img=56", totalPoints: 870, levelName: "Composter" },
];

export default function Leaderboard() {
  return (
    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow p-4 text-white">
      {/* Trophy / Piala dengan gelombang sinyal */}
     <div className="flex justify-center items-center relative w-full h-32">
        {/* Lingkaran luar */}
        <div className="absolute w-32 h-32 rounded-full bg-white/5 backdrop-blur-md border border-white/20"></div>
        
        {/* Lingkaran tengah */}
        <div className="absolute w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>
        
        {/* Lingkaran piala */}
        <div className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-4xl shadow-lg border border-white/30">
            🏆
        </div>
     </div>



      <h3 className="text-md font-bold mb-4 mt-2 text-center">Top 5 Members</h3>

      <ul className="space-y-3">
        {topUsers.map((user, index) => {
          // Highlight posisi 1–3 dengan medali
          const medal =
            index === 0 ? "🥇" :
            index === 1 ? "🥈" :
            index === 2 ? "🥉" : "";

          const bgHighlight =
            index === 0 ? "bg-yellow-500/20" :
            index === 1 ? "bg-gray-400/10" :
            index === 2 ? "bg-orange-500/10" : "bg-white/5";

          return (
            <li
              key={user.username}
              className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${bgHighlight} hover:bg-white/10 transition`}
            >
              <div className="flex items-center space-x-3">
                {/* Ranking & Medali */}
                <span className="text-lg w-6">{index + 1}</span>

                {/* Avatar */}
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />

                {/* Username & Level */}
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{user.username}</span>
                  <p className="text-gray-300 text-xs">{medal} {user.levelName}</p>
                </div>
              </div>

              {/* Points */}
              <div className="text-right">
                <span className="font-bold text-green-400 text-sm">{user.totalPoints}</span>
                <span className="text-gray-300 text-xs ml-1">pts</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
