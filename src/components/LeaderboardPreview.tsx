const LeaderboardPreview = () => {
  // Mock data for leaderboard preview
  const topUsers = [
    {
      id: 1,
      name: "გიორგი გიორგაძე",
      score: 950,
      sessions: 42,
      swaps: 18,
      rating: 4.9
    },
    {
      id: 2,
      name: "ნინო ნინოშვილი",
      score: 920,
      sessions: 38,
      swaps: 15,
      rating: 4.8
    },
    {
      id: 3,
      name: "ლევან ლევანიძე",
      score: 900,
      sessions: 35,
      swaps: 12,
      rating: 4.7
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            ლიდერბორდი
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            გაიგეთ ყველაზე აქტიური და წარმატებული მომხმარებლები
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topUsers.map((user, index) => (
            <div 
              key={user.id} 
              className={`rounded-lg shadow-lg p-6 flex flex-col items-center text-center ${
                index === 0 
                  ? 'bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-300 dark:border-yellow-700' 
                  : index === 1 
                    ? 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600' 
                    : 'bg-amber-50 dark:bg-amber-900 border-2 border-amber-200 dark:border-amber-700'
              }`}
            >
              <div className="mb-4">
                {index === 0 ? (
                  <span className="text-4xl">🥇</span>
                ) : index === 1 ? (
                  <span className="text-4xl">🥈</span>
                ) : (
                  <span className="text-4xl">🥉</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h3>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                <p>ქულები: {user.score}</p>
                <p>სესიები: {user.sessions}</p>
                <p>გაცვლები: {user.swaps}</p>
                <p>რეიტინგი: {user.rating}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/leaderboard" 
            className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            სრული ლიდერბორდი
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPreview;