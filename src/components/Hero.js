"use strict";
exports.__esModule = true;
var Hero = function () {
    return (<div className="relative bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            შეისწავლე. გააზიარე. გაიზარდე.
          </h1>
          <p className="mt-6 max-w-lg text-xl text-blue-100 md:max-w-2xl">
            უნარების განვითარების პლატფორმა, სადაც შეისწავლი ახალს, გააზიარებ ცოდნას და გაიზარდე პროფესიულად
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/teachers" className="px-8 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              დაიწყე სწავლება
            </a>
            <a href="/swap" className="px-8 py-3 text-base font-medium text-white bg-transparent border border-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              უნარების გაცვლა
            </a>
          </div>
        </div>
      </div>
    </div>);
};
exports["default"] = Hero;
