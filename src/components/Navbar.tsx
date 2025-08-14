import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Notifications from './Notifications';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md" role="navigation" aria-label="მთავარი ნავიგაცია">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Links */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" aria-label="მთავარი გვერდი">
              <span className="text-2xl font-bold text-blue-600">Skillzy</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {[
                { to: '/', label: 'მთავარი' },
                { to: '/teachers', label: 'მასწავლებლები' },
                { to: '/swap', label: 'უნარების გაცვლა' },
                { to: '/leaderboard', label: 'ლიდერბორდი' },
                { to: '/blog', label: 'ბლოგი' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <DarkModeToggle />
              <Notifications />
              <Link to="/profile" className="ml-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 px-3 py-2 text-sm font-medium">
                პროფილი
              </Link>
              <Link to="/auth" className="ml-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 px-3 py-2 text-sm font-medium">
                შესვლა
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <DarkModeToggle />
              <Notifications />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-label="მენიუს გახსნა"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {[
              { to: '/', label: 'მთავარი' },
              { to: '/teachers', label: 'მასწავლებლები' },
              { to: '/swap', label: 'უნარების გაცვლა' },
              { to: '/leaderboard', label: 'ლიდერბორდი' },
              { to: '/blog', label: 'ბლოგი' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-4 space-x-4">
                <Link to="/profile" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium">
                  პროფილი
                </Link>
                <Link to="/auth" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium">
                  შესვლა
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
