"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var TeacherProfile = function () {
    var _a = (0, react_1.useState)(''), selectedDate = _a[0], setSelectedDate = _a[1];
    // Mock teacher data
    var teacher = {
        id: 1,
        name: "მარიამ გიორგაძე",
        bio: "გამოცდილი ინგლისურის მასწავლებელი 10 წლიანი გამოცდილებით. სტანფორდის უნივერსიტეტის ფილოლოგიის ფაკულტეტის დიპლომი. სწავლების მეთოდები მოიცავს ინტერაქტიულ და თამაშულ მიდგომებს.",
        skills: ["ინგლისური", "ფრანგული", "ლიტერატურა", "წერა", "კითხვა"],
        rating: 4.9,
        reviews: 128,
        experience: 10,
        price: 50,
        sessions: 342,
        availability: ["ორშაბათი", "სამშაბათი", "ხუთშაბათი", "პარასკევი"],
        achievements: [
            "სტანფორდის უნივერსიტეტის დიპლომი",
            "სერტიფიცირებული ინგლისურის მასწავლებელი",
            "10 წლიანი გამოცდილება"
        ]
    };
    var reviews = [
        {
            id: 1,
            user: "გიორგი გ.",
            rating: 5,
            comment: "ძალიან კარგი მასწავლებელი! მინდოდ გავაუმჯობესე ინგლისური და მარიამმა მეხმარა ამაში.",
            date: "2023-10-15"
        },
        {
            id: 2,
            user: "ნინო ნ.",
            rating: 5,
            comment: "პროფესიონალური და მეგობრული მიდგომა. სწავლება ხდება სასიამოვნოდ.",
            date: "2023-09-22"
        },
        {
            id: 3,
            user: "ლევან ლ.",
            rating: 4,
            comment: "კარგი სესიები, თუმცა ზოგჯერ გაკვეთილები გადაიწყვიტება განაკვეთით.",
            date: "2023-08-30"
        }
    ];
    return (<div className="container mx-auto px-4 py-8">
      {/* Video cover placeholder */}
      <div className="relative bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-64 mb-8"/>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Teacher info */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mb-4 sm:mb-0 sm:mr-6"/>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {teacher.name}
                </h1>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {__spreadArray([], Array(5), true).map(function (_, i) { return (<svg key={i} className={"w-5 h-5 ".concat(i < Math.floor(teacher.rating) ? 'text-yellow-400' : 'text-gray-300')} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>); })}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {teacher.rating} ({teacher.reviews} მიმოხილვა)
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {teacher.skills.map(function (skill, index) { return (<span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {skill}
                    </span>); })}
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacher.experience}</p>
                <p className="text-gray-600 dark:text-gray-300">წლის გამოცდილება</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacher.sessions}</p>
                <p className="text-gray-600 dark:text-gray-300">სესია</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacher.rating}</p>
                <p className="text-gray-600 dark:text-gray-300">რეიტინგი</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacher.price}₾</p>
                <p className="text-gray-600 dark:text-gray-300">ფასი/სესია</p>
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="mt-8 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ბიოგრაფია
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {teacher.bio}
            </p>
          </div>
          
          {/* Achievements */}
          <div className="mt-8 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              მიღწევნები
            </h2>
            <ul className="space-y-2">
              {teacher.achievements.map(function (achievement, index) { return (<li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    {achievement}
                  </span>
                </li>); })}
            </ul>
          </div>
          
          {/* Reviews */}
          <div className="mt-8 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              მიმოხილვები ({reviews.length})
            </h2>
            <div className="space-y-6">
              {reviews.map(function (review) { return (<div key={review.id} className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {review.user}
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex mt-1">
                    {__spreadArray([], Array(5), true).map(function (_, i) { return (<svg key={i} className={"w-4 h-4 ".concat(i < review.rating ? 'text-yellow-400' : 'text-gray-300')} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>); })}
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {review.comment}
                  </p>
                </div>); })}
            </div>
          </div>
        </div>
        
        {/* Booking sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              დაჯავშნა
            </h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                ხელმისაწვდომობა
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {teacher.availability.map(function (day, index) { return (<button key={index} className={"py-2 text-sm font-medium rounded-md ".concat(selectedDate === day
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500')} onClick={function () { return setSelectedDate(day); }}>
                    {day}
                  </button>); })}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                დრო
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(function (time, index) { return (<button key={index} className="py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                    {time}
                  </button>); })}
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">ფასი:</span>
                <span className="font-medium text-gray-900 dark:text-white">{teacher.price}₾</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">საკომისიო (10%):</span>
                <span className="font-medium text-gray-900 dark:text-white">{(teacher.price * 0.1).toFixed(2)}₾</span>
              </div>
              <div className="flex justify-between mt-4 pt-2 border-t border-gray-200 dark:border-gray-600">
                <span className="font-medium text-gray-900 dark:text-white">სულ:</span>
                <span className="font-bold text-lg text-gray-900 dark:text-white">{(teacher.price * 1.1).toFixed(2)}₾</span>
              </div>
            </div>
            
            <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              დაჯავშნის გაკეთება
            </button>
          </div>
        </div>
      </div>
    </div>);
};
exports["default"] = TeacherProfile;
