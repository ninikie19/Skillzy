"use strict";
exports.__esModule = true;
var FeatureGrid = function () {
    var features = [
        {
            title: "მასწავლებლების ბაზარი",
            description: "იპოვეთ და დაჯავშნეთ სესიები გამოცდილი მასწავლებლებთან სხვადასხვა უნარების შესასწავლად.",
            icon: "👨‍🏫"
        },
        {
            title: "უნარების გაცვლა",
            description: "გაცვალეთ თქვენი უნარები სხვების უნარების სწავლის წინააღმდეგ. ისწავლეთ უფასოდ იმ ადამიანებისგან, რომლებსაც სჭირდებათ ის, რაც თქვენ იცით.",
            icon: "🔄"
        },
        {
            title: "ლიდერბორდი",
            description: "გაიგეთ წამოყვანილი მომხმარებლები და მიიღეთ დამატებითი სარგებელი Skill Coins-ის სახით.",
            icon: "🏆"
        },
        {
            title: "Skill Coins",
            description: "მიიღეთ სახელმძღვანელო სისტემაში მონეტები აქტიურობისთვის და გამოიყენეთ ისინი პრიორიტეტული სიაში გადასასვლელად.",
            icon: "🪙"
        },
        {
            title: "პროფესიული განვითარება",
            description: "განვითარეთ თქვენი უნარები და მიიღეთ სასერტიფიკატები სასწავლო კურსების დასრულების შემდეგ.",
            icon: "📈"
        },
        {
            title: "კომუნიკაცია",
            description: "დაუკავშირდით მასწავლებლებს და სხვა მომხმარებლებს ჩატში და გააცვილეთ ცოდნა და გამოცდილება.",
            icon: "💬"
        }
    ];
    return (<div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            რას გვერ გთავდებით?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Skillzy არის უნარების განვითარების პლატფორმა, სადაც შეისწავლით, გააზიარებთ და გაიზარდებით პროფესიულად
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) { return (<div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>); })}
        </div>
      </div>
    </div>);
};
exports["default"] = FeatureGrid;
