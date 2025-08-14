import { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import TeacherFilters from '../components/TeacherFilters';
import { mockTeachers } from '../data/teachers';

const Teachers = () => {
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    priceRange: [0, 100],
    experience: '',
    rating: 0,
    availability: ''
  });

  const [sortBy, setSortBy] = useState('rating');

  // Filter and sort teachers based on filters and sort option
  const filteredTeachers = mockTeachers
    .filter(teacher => {
      // Location filter
      if (filters.location && !teacher.location.includes(filters.location)) return false;
      
      // Category filter
      if (filters.category && !teacher.skills.includes(filters.category)) return false;
      
      // Price range filter
      if (teacher.price < filters.priceRange[0] || teacher.price > filters.priceRange[1]) return false;
      
      // Experience filter
      if (filters.experience && teacher.experience < parseInt(filters.experience)) return false;
      
      // Rating filter
      if (filters.rating && teacher.rating < filters.rating) return false;
      
      // Availability filter
      if (filters.availability && !teacher.availability.includes(filters.availability)) return false;
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'activity') return b.sessions - a.sessions;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ჩვენი მასწავლებლები</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TeacherFilters filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              ნაპოვნია {filteredTeachers.length} მასწავლებელი
            </p>
            
            <div className="flex items-center">
              <span className="mr-2 text-gray-700 dark:text-gray-300">დალაგება:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-3 py-1 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="rating">რეიტინგი</option>
                <option value="price">ფასი</option>
                <option value="activity">აქტიურობა</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;