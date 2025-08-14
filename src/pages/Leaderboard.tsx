import { useState } from 'react';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('all');

  // Mock leaderboard data
  const leaderboard = [
    {
      id: 1,
      rank: 1,
      name: "გიორგი გიორგაძე",
      score: 1250,
      sessions: 42,
      swaps: 18,
      rating: 4.9,
      avatar: "GG"
    },
    {
      id: 2,
      rank: 2,
      name: "ნინო ნინოშვილი",
      score: 1180,
      sessions: 38,
      swaps: 15,
      rating: 4.8,
      avatar: "ნნ"
    },
    {
      id: 3,
      rank: 3,
      name: "ლევან ლევანიძე",
      score: 1120,
      sessions: 35,
      swaps: 12,
      rating: 4.7,
      avatar: "ლლ"
    },
    {
      id: 4,
      rank: 4,
      name: "მარიამ მარიამიძე",
      score: 1050,
      sessions: 32,
      swaps: 10,
      rating: 4.6,
      avatar: "მმ"
    },
    {
      id: 5,
      rank: 5,
      name: "საბა საბაშვილი",
      score: 980,
      sessions: 28,
      swaps: 8,
      rating: 4.5,
      avatar: "სს"
    },
    {
      id: 6,
      rank: 6,
      name: "ანა ანაშვილი",
      score: 920,
      sessions: 25,
      swaps: 7,
      rating: 4.4,
      avatar: "აა"
    },
    {
      id: 7,
      rank: 7,
      name: "დავით დავითაშვილი",
      score: 880,
      sessions: 22,
      swaps: 6,
      rating: 4.3,
      avatar: "დდ"
    },
    {
      id: 8,
      rank: 8,
      name: "ელენე ელენაშვილი",
      score: 850,
      sessions: 20,
      swaps: 5,
      rating: 4.2,
      avatar: "ეე"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        ლიდერბორდი
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setTimeFilter('week')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeFilter === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            კვირა
          </button>
          <button
            type="button"
            onClick={() => setTimeFilter('month')}
            className={`px-4 py-2 text-sm font-medium ${
              timeFilter === 'month'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            თვე
          </button>
          <button
            type="button"
            onClick={() => setTimeFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            ყველა დრო
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Top 3 users */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Second place */}
            <div className="order-1 md:order-none">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🥈</div>
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold">{leaderboard[1].avatar}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {leaderboard[1].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ქულები: {leaderboard[1].score}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  რეიტინგი: {leaderboard[1].rating}
                </p>
              </div>
            </div>
            
            {/* First place */}
            <div className="order-0 md:order-none">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🥇</div>
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold">{leaderboard[0].avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {leaderboard[0].name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ქულები: {leaderboard[0].score}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  რეიტინგი: {leaderboard[0].rating}
                </p>
              </div>
            </div>
            
            {/* Third place */}
            <div className="order-2 md:order-none">
              <div className="bg-amber-50 dark:bg-amber-900 rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🥉</div>
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold">{leaderboard[2].avatar}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {leaderboard[2].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ქულები: {leaderboard[2].score}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  რეიტინგი: {leaderboard[2].rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leaderboard list */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-600 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
          <div className="col-span-1">რიგი</div>
          <div className="col-span-5">სახელი</div>
          <div className="col-span-2 text-right">ქულები</div>
          <div className="col-span-2 text-right">სესიები</div>
          <div className="col-span-2 text-right">გაცვლები</div>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-600">
          {leaderboard.map((user) => (
            <div 
              key={user.id} 
              className={`grid grid-cols-12 gap-4 px-6 py-4 ${
                user.rank <= 3 
                  ? 'bg-blue-50 dark:bg-blue-900' 
                  : 'bg-white dark:bg-gray-700'
              }`}
            >
              <div className="col-span-1 flex items-center">
                <span className={`font-bold ${
                  user.rank === 1 
                    ? 'text-yellow-600 dark:text-yellow-400' 
                    : user.rank === 2 
                      ? 'text-gray-500 dark:text-gray-400' 
                      : user.rank === 3 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-gray-900 dark:text-white'
                }`}>
                  {user.rank}
                </span>
              </div>
              <div className="col-span-5 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">{user.avatar}</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {user.name}
                </span>
              </div>
              <div className="col-span-2 text-right text-gray-900 dark:text-white font-medium">
                {user.score}
              </div>
              <div className="col-span-2 text-right text-gray-900 dark:text-white">
                {user.sessions}
              </div>
              <div className="col-span-2 text-right text-gray-900 dark:text-white">
                {user.swaps}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
          გადატვირთვა
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;