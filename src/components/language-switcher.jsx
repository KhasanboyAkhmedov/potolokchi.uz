import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggler = () => {
  const [language, setLanguage] = useState('Русский')
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {label: "Русский" },
    {label: "English"},
    {label: "Uzbek"},
  ]

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setIsOpen(false)
  };
  return (
    <div className="relative">
      <div>
        <button
          onClick={toggleDrawer}
          className="inline-flex  items-center justify-center w-full px-2 py-1  sm:px-4 sm:py-2 text-xs sm:text-sm font-medium border rounded-md focus:outline-none"
        >
          <FaGlobe className="mr-1" size={18} />
          <p className=' 3xl:text-lg'>
            {language}
          </p>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map(opt => (
              <button onClick={handleLanguageChange} value={opt.label} key={opt.value} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">{opt.label}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggler;
