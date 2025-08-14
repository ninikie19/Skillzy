const TeacherCard = ({ teacher }: { teacher: any }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-48" />
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          {teacher.rating} ★
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {teacher.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {teacher.location}
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {teacher.skills.slice(0, 3).map((skill: string, index: number) => (
              <span 
                key={index} 
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
            {teacher.skills.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                +{teacher.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {teacher.price}₾
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              /სესია
            </span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            დაჯავშნა
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;