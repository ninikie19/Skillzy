"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Blog = function () {
    var _a = (0, react_1.useState)(''), searchTerm = _a[0], setSearchTerm = _a[1];
    // Mock blog posts data
    var blogPosts = [
        {
            id: 1,
            title: "როგორ გავაუმჯობესოთ ჩვენი უნარები სწრაფად",
            excerpt: "ამ სტატიაში განვიხილავთ ეფექტურ მეთოდებს, რომლებიც დაგეხმარებათ უნარების სწრაფად განვითარებაში.",
            date: "2023-10-15",
            author: "გიორგი გიორგაძე",
            readTime: "5 წუთი",
            category: "უნარები"
        },
        {
            id: 2,
            title: "უნარების გაცვლის უპირატესობები",
            excerpt: "გაიგეთ, რატომ არის უნარების გაცვლა ერთ-ერთი უმნიშვნელოვანესი გზა პროფესიული განვითარებისთვის.",
            date: "2023-10-10",
            author: "ნინო ნინოშვილი",
            readTime: "7 წუთი",
            category: "გაცვლა"
        },
        {
            id: 3,
            title: "ტექნოლოგიების მნიშვნელობა სწავლებაში",
            excerpt: "როგორ შეიძლება ტექნოლოგიების გამოყენება გავაუმჯობესოთ სწავლების პროცესი და შედეგები.",
            date: "2023-10-05",
            author: "ლევან ლევანიძე",
            readTime: "6 წუთი",
            category: "ტექნოლოგიები"
        },
        {
            id: 4,
            title: "ეფექტური კომუნიკაცია სწავლებისას",
            excerpt: "კომუნიკაციის უნარების განვითარება სწავლების პროცესში მნიშვნელოვანი როლი თამაშობს.",
            date: "2023-09-28",
            author: "მარიამ მარიამიძე",
            readTime: "4 წუთი",
            category: "კომუნიკაცია"
        },
        {
            id: 5,
            title: "სწავლების მოტივაციის შენარჩუნების მეთოდები",
            excerpt: "როგორ შევინარჩუნოთ მოტივაცია გრძელვადიან სწავლების პროცესში და მივაღწიოთ დასახულ მიზნებს.",
            date: "2023-09-20",
            author: "საბა საბაშვილი",
            readTime: "8 წუთი",
            category: "მოტივაცია"
        }
    ];
    var filteredPosts = blogPosts.filter(function (post) {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        ბლოგი
      </h1>
      
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <input type="text" placeholder="ძიება სტატიებში..." value={searchTerm} onChange={function (e) { return setSearchTerm(e.target.value); }} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"/>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(function (post) { return (<div key={post.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-48"/>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {post.date}
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm">
                  სრულად
                </button>
              </div>
            </div>
          </div>); })}
      </div>
      
      {filteredPosts.length === 0 && (<div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            სტატიები ვერ მოიძებნა მითითებული პარამეტრებით.
          </p>
        </div>)}
      
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
            2
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
            3
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
            შემდეგი
          </button>
        </nav>
      </div>
    </div>);
};
exports["default"] = Blog;
