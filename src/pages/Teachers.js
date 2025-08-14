"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TeacherCard_1 = require("../components/TeacherCard");
var TeacherFilters_1 = require("../components/TeacherFilters");
var teachers_1 = require("../data/teachers");
var Teachers = function () {
    var _a = (0, react_1.useState)({
        location: '',
        category: '',
        priceRange: [0, 100],
        experience: '',
        rating: 0,
        availability: ''
    }), filters = _a[0], setFilters = _a[1];
    var _b = (0, react_1.useState)('rating'), sortBy = _b[0], setSortBy = _b[1];
    // Filter and sort teachers based on filters and sort option
    var filteredTeachers = teachers_1.mockTeachers
        .filter(function (teacher) {
        // Location filter
        if (filters.location && !teacher.location.includes(filters.location))
            return false;
        // Category filter
        if (filters.category && !teacher.skills.includes(filters.category))
            return false;
        // Price range filter
        if (teacher.price < filters.priceRange[0] || teacher.price > filters.priceRange[1])
            return false;
        // Experience filter
        if (filters.experience && teacher.experience < parseInt(filters.experience))
            return false;
        // Rating filter
        if (filters.rating && teacher.rating < filters.rating)
            return false;
        // Availability filter
        if (filters.availability && !teacher.availability.includes(filters.availability))
            return false;
        return true;
    })
        .sort(function (a, b) {
        if (sortBy === 'rating')
            return b.rating - a.rating;
        if (sortBy === 'price')
            return a.price - b.price;
        if (sortBy === 'activity')
            return b.sessions - a.sessions;
        return 0;
    });
    return (<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ჩვენი მასწავლებლები</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TeacherFilters_1["default"] filters={filters} setFilters={setFilters}/>
        </div>
        
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              ნაპოვნია {filteredTeachers.length} მასწავლებელი
            </p>
            
            <div className="flex items-center">
              <span className="mr-2 text-gray-700 dark:text-gray-300">დალაგება:</span>
              <select value={sortBy} onChange={function (e) { return setSortBy(e.target.value); }} className="border rounded px-3 py-1 dark:bg-gray-800 dark:border-gray-700">
                <option value="rating">რეიტინგი</option>
                <option value="price">ფასი</option>
                <option value="activity">აქტიურობა</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map(function (teacher) { return (<TeacherCard_1["default"] key={teacher.id} teacher={teacher}/>); })}
          </div>
        </div>
      </div>
    </div>);
};
exports["default"] = Teachers;
