import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-blue-600">Skillzy</h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              "ისწავლე, გააზიარე, გაიზარდე" - უნარების განვითარების პლატფორმა
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              ჩვენი მიზანია ხალხის უნარების განვითარება და გაცვლა.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
              ნავიგაცია
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  მთავარი
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  მასწავლებლები
                </Link>
              </li>
              <li>
                <Link to="/swap" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  უნარების გაცვლა
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  ლიდერბორდი
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
              კონტაქტი
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:info@skillzy.ge" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  info@skillzy.ge
                </a>
              </li>
              <li>
                <a href="tel:+995123456789" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  +995 123 456 789
                </a>
              </li>
              <li>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  თბილისი, საქართველო
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 dark:text-gray-500">
            &copy; 2023 Skillzy. ყველა უფლება დაცულია.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-base text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 mx-4">
              კონფიდენციალურობა
            </Link>
            <Link to="/terms" className="text-base text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 mx-4">
              წესები და პირობები
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;