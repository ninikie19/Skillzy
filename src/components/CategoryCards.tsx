const CategoryCards = () => {
  const categories = [
    {
      name: "ენები",
      description: "ისწავლეთ ახალი ენები და გაუმჯობესეთ თქვენი კომუნიკაციის უნარები",
      icon: "🌍"
    },
    {
      name: "ტექნოლოგიები",
      description: "განვითარეთ თქვენი პროგრამირების და ტექნოლოგიების უნარები",
      icon: "💻"
    },
    {
      name: "ხელოვნება",
      description: "განვითარეთ თქვენი ნახატის და შექმნის უნარები",
      icon: "🎨"
    },
    {
      name: "მუსიკა",
      description: "ისწავლეთ ინსტრუმენტები და ვოკალური უნარები",
      icon: "🎵"
    },
    {
      name: "მეცნიერება",
      description: "განვითარეთ თქვენი ლოგიკური აზროვნება და კვლევითი უნარები",
      icon: "🔬"
    },
    {
      name: "სპორტი",
      description: "განვითარეთ თქვენი ფიზიკური უნარები და ჯანმრთელობა",
      icon: "⚽"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            კატეგორიები
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            იპოვეთ სასურველი უნარების კატეგორია და დაიწყეთ თქვენი განვითარება
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;