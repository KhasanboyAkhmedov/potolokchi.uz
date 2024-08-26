import { useState } from 'react'

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('ru'); 

    const options = [
        {label: "Русский", value: "ru" },
        {label: "English", value: "en" },
        {label: "Uzbek", value: "uz" },
    ]
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <select
        id="language"
        value={language}
        onChange={handleLanguageChange}
        className="w-14 xsm:w-24 sm:w-24 3xl:w-32 py-1 px-2 xsm:mr-2 sm:mr-2  lg:mr-0 bg-transparent border text-white rounded-md shadow-sm focus:outline-none  text-sm 3xl:text-lg"
      >
        {options.map(option => (
            <option key={option.value} className='text-black 3xl:text-lg' value={option.value}>
              {option.label}
            </option>
        ))}
      </select>
    </>
    
  );
}

export default LanguageSwitcher