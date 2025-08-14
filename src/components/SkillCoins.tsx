import { useState } from 'react';

const SkillCoins = () => {
  const [coins, setCoins] = useState(1250);

  const addCoins = (amount: number) => {
    setCoins(prev => prev + amount);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-3 py-1">
        <span className="text-lg">🪙</span>
        <span className="ml-1 font-bold text-gray-900 dark:text-white">{coins}</span>
      </div>
      <div className="flex space-x-1">
        <button
          onClick={() => addCoins(1)}
          className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          +
        </button>
        <button
          onClick={() => addCoins(50)}
          className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          +50
        </button>
      </div>
    </div>
  );
};

export default SkillCoins;