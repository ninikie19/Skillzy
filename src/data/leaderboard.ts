export const mockLeaderboard = [
  {
    id: 1,
    userId: 1,
    name: "გიორგი გიორგაძე",
    score: 1250,
    sessions: 42,
    swaps: 18,
    rating: 4.9,
    avatar: "GG",
    rank: 1
  },
  {
    id: 2,
    userId: 2,
    name: "ნინო ნინოშვილი",
    score: 1180,
    sessions: 38,
    swaps: 15,
    rating: 4.8,
    avatar: "ნნ",
    rank: 2
  },
  {
    id: 3,
    userId: 3,
    name: "ლევან ლევანიძე",
    score: 1120,
    sessions: 35,
    swaps: 12,
    rating: 4.7,
    avatar: "ლლ",
    rank: 3
  },
  {
    id: 4,
    userId: 4,
    name: "მარიამ მარიამიძე",
    score: 1050,
    sessions: 32,
    swaps: 10,
    rating: 4.6,
    avatar: "მმ",
    rank: 4
  },
  {
    id: 5,
    userId: 5,
    name: "საბა საბაშვილი",
    score: 980,
    sessions: 28,
    swaps: 8,
    rating: 4.5,
    avatar: "სს",
    rank: 5
  },
  {
    id: 6,
    userId: 6,
    name: "ანა ანაშვილი",
    score: 920,
    sessions: 25,
    swaps: 7,
    rating: 4.4,
    avatar: "აა",
    rank: 6
  },
  {
    id: 7,
    userId: 7,
    name: "დავით დავითაშვილი",
    score: 880,
    sessions: 22,
    swaps: 6,
    rating: 4.3,
    avatar: "დდ",
    rank: 7
  },
  {
    id: 8,
    userId: 8,
    name: "ელენე ელენაშვილი",
    score: 850,
    sessions: 20,
    swaps: 5,
    rating: 4.2,
    avatar: "ეე",
    rank: 8
  }
];

// Mock ranking formula: rating * 0.5 + activity * 0.3 + successful swaps * 0.2
export const calculateRankingScore = (rating: number, activity: number, swaps: number): number => {
  return Math.round((rating * 0.5 + activity * 0.3 + swaps * 0.2) * 100);
};