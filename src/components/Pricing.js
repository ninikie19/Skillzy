"use strict";
exports.__esModule = true;
var Pricing = function () {
    var plans = [
        {
            name: "უფასო",
            price: "0₾",
            period: "თვეში",
            description: "საწყისი პაკეტი ყველასთვის",
            features: [
                "ულიმიტო გაცვლები",
                "5 სესია თვეში",
                "ჩატის ფუნქცია",
                "პროფილის შექმნა"
            ],
            cta: "დაწყება",
            popular: false
        },
        {
            name: "პრემიუმი",
            price: "29₾",
            period: "თვეში",
            description: "გაფართოებული შესაძლებლობები",
            features: [
                "ულიმიტო გაცვლები",
                "ულიმიტო სესიები",
                "ჩატის ფუნქცია",
                "პროფილის შექმნა",
                "რეკლამების გარეშე",
                "პრიორიტეტული შეთავაზებები"
            ],
            cta: "გამოცდილება",
            popular: true
        },
        {
            name: "პროფესიონალი",
            price: "49₾",
            period: "თვეში",
            description: "ყველა შესაძლებლობა მაქსიმალურად",
            features: [
                "ულიმიტო გაცვლები",
                "ულიმიტო სესიები",
                "ჩატის ფუნქცია",
                "პროფილის შექმნა",
                "რეკლამების გარეშე",
                "პრიორიტეტული შეთავაზებები",
                "პრიორიტეტული სიაში გადასვლა",
                "მეტი Skill Coins"
            ],
            cta: "გამოცდილება",
            popular: false
        }
    ];
    return (<div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            გეგმები და ფასები
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            აირჩიეთ თქვენთვის სასურველი გეგმა და დაიწყეთ თქვენი განვითარება
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(function (plan, index) { return (<div key={index} className={"rounded-lg shadow-lg p-6 ".concat(plan.popular
                ? 'ring-2 ring-blue-500 dark:ring-blue-400 transform scale-105'
                : 'bg-white dark:bg-gray-700')}>
              {plan.popular && (<div className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  ყველაზე პოპულარი
                </div>)}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                  /{plan.period}
                </span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map(function (feature, featureIndex) { return (<li key={featureIndex} className="flex items-start">
                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>); })}
              </ul>
              <div className="mt-8">
                <a href="#" className={"w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ".concat(plan.popular
                ? 'text-white bg-blue-600 hover:bg-blue-700'
                : 'text-blue-600 bg-white border-blue-600 hover:bg-blue-50 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500')}>
                  {plan.cta}
                </a>
              </div>
            </div>); })}
        </div>
      </div>
    </div>);
};
exports["default"] = Pricing;
