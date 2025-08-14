"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Notifications = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var notifications = (0, react_1.useState)([
        {
            id: 1,
            message: "თქვენ მიიღეთ ახალი შეტყობინება მარიამისგან",
            time: "5 წუთის წინ",
            read: false
        },
        {
            id: 2,
            message: "თქვენი სესია დაჯავშნილია ლევანთან",
            time: "1 საათის წინ",
            read: true
        },
        {
            id: 3,
            message: "თქვენ მიიღეთ 100 Skill Coin-ი",
            time: "1 დღის წინ",
            read: true
        }
    ])[0];
    var unreadCount = notifications.filter(function (n) { return !n.read; }).length;
    return (<div className="relative">
      <button onClick={function () { return setIsOpen(!isOpen); }} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="ნახეთ შეტყობინებები">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
        </svg>
        {unreadCount > 0 && (<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>)}
      </button>

      {isOpen && (<div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-10">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">შეტყობინებები</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (<div className="p-4 text-center text-gray-500 dark:text-gray-400">
                შეტყობინებები არ არის
              </div>) : (notifications.map(function (notification) { return (<div key={notification.id} className={"p-4 border-b border-gray-200 dark:border-gray-700 ".concat(notification.read ? 'bg-white dark:bg-gray-800' : 'bg-blue-50 dark:bg-blue-900')}>
                  <p className={"".concat(notification.read
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-gray-900 dark:text-white font-medium')}>
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>); }))}
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              ყველას ნახვა
            </button>
          </div>
        </div>)}
    </div>);
};
exports["default"] = Notifications;
