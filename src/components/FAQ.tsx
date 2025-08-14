import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "როგორ შეიძლება მასწავლებლის ბაზარზე რეგისტრაცია?",
      answer: "რეგისტრაციის შემდეგ, თქვენ შეგიძლიათ განაცხადების გაკეთება მასწავლებლის სტატუსით. შეიყვანეთ თქვენი ინფორმაცია, უნარები და ფასები, რომლებზეც არის დაჯავშნის შესაძლებლობა."
    },
    {
      question: "როგორ შეიძლება უნარების გაცვლა?",
      answer: "უნარების გაცვლის გასააქტიურებისთვის მიუთითეთ თქვენს მიერ გასაცდელად განკუთვნილი უნარები და იმ უნარები, რომლებიც გსურთ შეისწავლოთ. სისტემა ავტომატურად შემოგთავაზებთ შესაბამის ადამიანებს."
    },
    {
      question: "რა არის Skill Coins და როგორ შეიძლება მიიღოთ?",
      answer: "Skill Coins არის პლატფორმის შიდა ვალუტა, რომელსაც იღებთ ყოველდღიურად საიტზე შესვლით, მეგობრების მოწვევით და გამომდინარე გეგმის შეძენით. ისინი გამოიყენება პრიორიტეტული სიაში გადასასვლელად."
    },
    {
      question: "როგორ ხდება გადახდა და რა საკომისიო იღებს პლატფორმა?",
      answer: "გადახდა ხდება პლატფორმაზე იმ საშუალებით, რომელსაც აირჩევთ. სესიის დაჯავშნისას, 10% საკომისიო იღებს პლატფორმა, ხოლო დანაშაული ეკიდება მასწავლებელს."
    },
    {
      question: "როგორ ხდება ლიდერბორდის დათვლა?",
      answer: "ლიდერბორდის დათვლა ხდება ფორმულით: რეიტინგი * 0.5 + აქტიურობა * 0.3 + წარმატებული გაცვლები * 0.2"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            ხშირად დასმული კითხვები
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            იპოვეთ პასუხები ყველაზე ხშირ კითხვებზე
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <svg 
                  className={`h-6 w-6 text-gray-500 dark:text-gray-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;