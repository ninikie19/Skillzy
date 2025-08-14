"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SkillCoins_1 = require("../components/SkillCoins");
var Profile = function () {
    var _a = (0, react_1.useState)('profile'), activeTab = _a[0], setActiveTab = _a[1];
    // Mock user data
    var user = {
        name: "გიორგი გიორგაძე",
        email: "giorgi.giorgadze@example.com",
        bio: "ვებ დიზაინერი და პროგრამისტი. მე უყვარს უნარების გაცვლა და სწავლება.",
        know: ["ინგლისური", "ვებ დიზაინი", "ფოტოგრაფია"],
        want: ["ფრანგული", "ვიდეო რედაქტირება", "მარკეტინგი"],
        achievements: [
            { id: 1, title: "10 სესია დასრულებული", date: "2023-10-15" },
            { id: 2, title: "5 გაცვლა შესრულებული", date: "2023-09-22" },
            { id: 3, title: "პროფილის ვერიფიცირებული", date: "2023-08-30" }
        ],
        notifications: [
            { id: 1, message: "თქვენ მიიღეთ ახალი შეტყობინება მარიამისგან", time: "5 წუთის წინ", read: false },
            { id: 2, message: "თქვენი სესია დაჯავშნილია ლევანთან", time: "1 საათის წინ", read: true },
            { id: 3, message: "თქვენ მიიღეთ 100 Skill Coin-ი", time: "1 დღის წინ", read: true }
        ],
        bookings: [
            { id: 1, teacher: "მარიამ გიორგაძე", skill: "ინგლისური", date: "2023-10-20", time: "10:00", status: "დასაწყისი" },
            { id: 2, teacher: "ნინო ნინოშვილი", skill: "ფოტოგრაფია", date: "2023-10-22", time: "14:00", status: "დასაწყისი" }
        ],
        swaps: [
            { id: 1, user: "ლევან ლევანიძე", skill: "ვიდეო რედაქტირება", date: "2023-10-18", status: "მიმდინარე" }
        ]
    };
    var handleInvite = function () {
        alert('მეგობრის მოწვევის ბმული დაგენერირდა!');
    };
    return (<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        თქვენი პროფილი
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mb-4"/>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {user.email}
              </p>

              <div className="mt-6 w-full">
                <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Skill Coins
                    </p>
                    <div className="mt-2">
                      <SkillCoins_1["default"] />
                    </div>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-800 rounded-full p-3">
                    <span className="text-2xl">🪙</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button onClick={handleInvite} className="py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500">
                    მოწვევა +
                  </button>
                  <button className="py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500">
                    გეგმა +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                ბიოგრაფია
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {user.bio}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                იცის
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.know.map(function (skill, index) { return (<span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-200">
                    {skill}
                  </span>); })}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                სურს ისწავლოს
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.want.map(function (skill, index) { return (<span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-200">
                    {skill}
                  </span>); })}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div className="border-b border-gray-200 dark:border-gray-600">
              <nav className="flex -mb-px">
                <button onClick={function () { return setActiveTab('profile'); }} className={"py-4 px-6 text-center border-b-2 font-medium text-sm ".concat(activeTab === 'profile'
            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500')}>
                  აქტიურობა
                </button>
                <button onClick={function () { return setActiveTab('notifications'); }} className={"py-4 px-6 text-center border-b-2 font-medium text-sm ".concat(activeTab === 'notifications'
            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500')}>
                  შეტყობინებები
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'profile' && (<div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      მიღწევნები
                    </h3>
                    <div className="space-y-3">
                      {user.achievements.map(function (achievement) { return (<div key={achievement.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                          <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full p-2 mr-3">
                            <span className="text-lg">🏆</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {achievement.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {achievement.date}
                            </p>
                          </div>
                        </div>); })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      დაჯავშნილი სესიები
                    </h3>
                    <div className="space-y-4">
                      {user.bookings.map(function (booking) { return (<div key={booking.id} className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {booking.teacher} - {booking.skill}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {booking.date} საათი: {booking.time}
                            </p>
                          </div>
                          <span className={"px-2 py-1 text-xs font-medium rounded-full ".concat(booking.status === 'დასაწყისი'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200')}>
                            {booking.status}
                          </span>
                        </div>); })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      გაცვლები
                    </h3>
                    <div className="space-y-4">
                      {user.swaps.map(function (swap) { return (<div key={swap.id} className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {swap.user} - {swap.skill}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {swap.date}
                            </p>
                          </div>
                          <span className={"px-2 py-1 text-xs font-medium rounded-full ".concat(swap.status === 'მიმდინარე'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200')}>
                            {swap.status}
                          </span>
                        </div>); })}
                    </div>
                  </div>
                </div>)}

              {activeTab === 'notifications' && (<div className="space-y-4">
                  {user.notifications.map(function (note) { return (<div key={note.id} className={"p-4 rounded-lg ".concat(note.read
                    ? 'bg-gray-100 dark:bg-gray-600'
                    : 'bg-blue-50 dark:bg-blue-800')}>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {note.message}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {note.time}
                      </p>
                    </div>); })}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports["default"] = Profile;
