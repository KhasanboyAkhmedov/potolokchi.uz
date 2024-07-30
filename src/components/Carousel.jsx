import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Tailwind Heroicons
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ images, sizes,itemName, description }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className=" w-full flex flex-col md:flex-row  justify-around">
      {/* Main Image */}
      <div className='px-4'>

        <div className="relative w-full h-full sm:h-[300px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[400px] xl:w-[600px] xl:h-[400px] rounded-xl ">
          <img
            src={images[selectedIndex]}
            alt={`Slide ${selectedIndex}`}
            className="w-full h-full object-cover rounded-xl"
          />
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>

        </div>

        {/* Thumbnails */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-8 h-8 md:w-16 md:h-16 object-cover cursor-pointer border-2  rounded-md ${
                selectedIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-5 md:mt-0 lg:w-1/2 flex flex-col space-y-4 lg:space-y-8 text-center  items-center md:text-start  md:items-start text-white flex-wrap px-2 md:px-4 lg:px-8">
        <h1 className='text-4xl lg:text-6xl xl:text-8xl font-semibold'>{itemName}</h1>
        <p className='text-sm lg:text-base xl:text-lg'>{description}</p>
        <div className='flex flex-row space-x-3 md:space-x-1 xl:space-x-3'>
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`px-3 py-1 lg:px-6 lg:py-2 border-2 ${
                selectedIndex === index ? 'border-blue-500' : 'border-gray-300'
              } rounded-lg`}
            >
              {size}
            </button>
          ))}
        </div>
        <Button 
          className="rounded-full mt-4 px-6 sm:px-8 py-4 sm:py-5 font-siteFont font-medium"
          style={{
            background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
            transition: 'all .3s',
          }}

          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundSize = '200% 100%';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundSize = '100% 40%';
          }}
          >
            <a href="tel:+998945552208">
            Заказать сейчас
            </a>
        </Button>
      </div>
      
    </div>
  );
};

export default Carousel;
