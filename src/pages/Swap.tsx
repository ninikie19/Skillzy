import { useState } from 'react';

const Swap = () => {
  const [knowSkills, setKnowSkills] = useState<string[]>([]);
  const [wantSkills, setWantSkills] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState('');

  // Mock skills data
  const skills = [
    "ინგლისური", "ფრანგული", "გერმანული", "ესპანური",
    "პროგრამირება", "ვებ დიზაინი", "ფოტოგრაფია", "ვიდეო რედაქტირება",
    "მუსიკა", "სათამაშო ინსტრუმენტები", "ცეკვა", "თეატრალური ხელოვნება",
    "მათემატიკა", "ფიზიკა", "ქიმია", "ბიოლოგია",
    "ფეხბურთი", "რგოლი", "სურფინგი", "იოგა"
  ];

  // Mock matches data
  const matches = [
    {
      id: 1,
      name: "გიორგი გიორგაძე",
      know: ["ინგლისური", "პროგრამირება"],
      want: ["ფრანგული", "ფოტოგრაფია"],
      level: "დამწყები",
      match: 95
    },
    {
      id: 2,
      name: "ნინო ნინოშვილი",
      know: ["ფრანგული", "ფოტოგრაფია"],
      want: ["ინგლისური", "ვებ დიზაინი"],
      level: "საშუალო",
      match: 87
    },
    {
      id: 3,
      name: "ლევან ლევანიძე",
      know: ["ვებ დიზაინი", "ვიდეო რედაქტირება"],
      want: ["პროგრამირება", "ინგლისური"],
      level: "გამოცდილი",
      match: 82
    }
  ];

  const toggleSkill = (skill: string, type: 'know' | 'want') => {
    if (type === 'know') {
      setKnowSkills(prev => 
        prev.includes(skill) 
          ? prev.filter(s => s !== skill) 
          : [...prev, skill]
      );
    } else {
      setWantSkills(prev => 
        prev.includes(skill) 
          ? prev.filter(s => s !== skill) 
          : [...prev, skill]
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to find matches
    console.log('Finding matches for:', { knowSkills, wantSkills, skillLevel });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        უნარების გაცვლა
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              მიუთითეთ თქვენი უნარები
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  რას იცით?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skills.slice(0, 10).map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill, 'know')}
                      className={`py-2 text-sm rounded-md ${
                        knowSkills.includes(skill)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  რას უნდა ისწავლოთ?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skills.slice(10).map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill, 'want')}
                      className={`py-2 text-sm rounded-md ${
                        wantSkills.includes(skill)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  თქვენი უნარების დონე
                </label>
                <select
                  value={skillLevel}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                >
                  <option value="">აირჩიეთ დონე</option>
                  <option value="დამწყები">დამწყები</option>
                  <option value="საშუალო">საშუალო</option>
                  <option value="გამოცდილი">გამოცდილი</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                შესაბამისების მოძებნა
              </button>
            </form>
          </div>
        </div>
        
        {/* Matches */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              რეკომენდირებული შესაბამისები
            </h2>
            
            <div className="space-y-4">
              {matches.map((match) => (
                <div key={match.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {match.name}
                      </h3>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          დამთხვევა: {match.match}%
                        </span>
                        <div className="ml-2 w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${match.match}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {match.level}
                    </span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        იცის:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {match.know.map((skill, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900 dark:text-green-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        სსურს ისწავლოს:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {match.want.map((skill, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                      პროფილი
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                      შეტყობინება
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mock checkout */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                გაცვლის საფასური
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">
                  ფიქსირებული საფასური: 5₾
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  გადახდა
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;