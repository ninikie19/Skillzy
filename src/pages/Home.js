"use strict";
exports.__esModule = true;
var Hero_1 = require("../components/Hero");
var FeatureGrid_1 = require("../components/FeatureGrid");
var CategoryCards_1 = require("../components/CategoryCards");
var LeaderboardPreview_1 = require("../components/LeaderboardPreview");
var Pricing_1 = require("../components/Pricing");
var FAQ_1 = require("../components/FAQ");
var Home = function () {
    return (<div className="container mx-auto px-4 py-8">
      <Hero_1["default"] />
      <div className="my-12">
        <h2 className="text-2xl font-bold text-center mb-8">რა არის Skillzy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">უნარების გაცვლა</h3>
            <p className="text-gray-700 dark:text-gray-300">
              გაცვალეთ თქვენი უნარები სხვების უნარების სწავლის წინააღმდეგ. იპოვეთ ადამიანები, რომლებსაც სჭირდებათ ის, რაც თქვენ იცით, და შესწავლეთ ის, რაც ისინი იციან.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">მასწავლებლების ბაზარი</h3>
            <p className="text-gray-700 dark:text-gray-300">
              იპოვეთ და დაჯავშნეთ სესიები გამოცდილი მასწავლებლებთან სხვადასხვა უნარების შესასწავლად. ისწავლეთ პროფესიონალებისგან თქვენთვის სასურველ სფეროში.
            </p>
          </div>
        </div>
      </div>
      <FeatureGrid_1["default"] />
      <CategoryCards_1["default"] />
      <LeaderboardPreview_1["default"] />
      <Pricing_1["default"] />
      <FAQ_1["default"] />
    </div>);
};
exports["default"] = Home;
