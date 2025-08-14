"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SkillCoins = function () {
    var _a = (0, react_1.useState)(1250), coins = _a[0], setCoins = _a[1];
    var addCoins = function (amount) {
        setCoins(function (prev) { return prev + amount; });
    };
    return (<div className="flex items-center space-x-2">
      <div className="flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-3 py-1">
        <span className="text-lg">🪙</span>
        <span className="ml-1 font-bold text-gray-900 dark:text-white">{coins}</span>
      </div>
      <div className="flex space-x-1">
        <button onClick={function () { return addCoins(1); }} className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500">
          +
        </button>
        <button onClick={function () { return addCoins(50); }} className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500">
          +50
        </button>
      </div>
    </div>);
};
exports["default"] = SkillCoins;
