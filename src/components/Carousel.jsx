import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import carousel from '@/data/carousel-data';

const Carousel = ({ images, sizes,itemName, description , productname}) => {
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
    <div className=" flex flex-col ">
      <div className='mx-auto md:ml-2 w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/3 2xl:w-[35%] xl:ml-16 py-5 mb-5 flex flex-row  justify-around overflow-x-auto whitespace-nowrap'>
        {carousel.map((el, index) => (
          <p 
            key={index} 
            className='text-white capitalize  font-siteFont font-semibold tracking-wide mx-2'
            onClick={() => navigate(`/details/${el.productname}`)}
            >
            {el.name}
            {el.productname === productname 
            && <div className='h-[1px] w-full mt-1'
            style={{
              background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
              }}
           />}
          </p>
        ))}
      </div>
      {/* Main Image */}
      <div className='flex flex-col md:flex-row  justify-around'>
        <div className='px-4'>

          <div className="relative w-full  h-full sm:h-[300px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[400px] xl:w-[600px] xl:h-[400px] rounded-xl ">
            <img
              src={images[selectedIndex]}
              alt={`Slide ${selectedIndex}`}
              className="w-full h-full object-cover rounded-xl"
            />
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              
              <ArrowLongLeftIcon className="w-6 h-6 text-[#E9C775]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >

              <ArrowLongRightIcon className="w-6 h-6 text-[#E9C775]" />
            </button>

          </div>

          {/* Thumbnails */}
          <div className=" flex items-center justify-around mt-4 space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-14 xsm:w-24 xsm:h-16 sm:w-28 sm:h-20 md:w-20 lg:w-24 xl:w-32 md:h-16 xl:h-20 object-cover cursor-pointer border-2  rounded-md ${
                  selectedIndex === index ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="w-full mt-5 md:mt-0 lg:w-1/2 flex  flex-col space-y-4 lg:space-y-8 text-center  items-center md:text-start  md:items-start text-white flex-wrap px-3 md:px-4 lg:px-8">
          <h1 className='text-4xl lg:text-6xl xl:text-8xl font-semibold'>{itemName}</h1>
          <p className='text-sm lg:text-base xl:text-lg '>{description}</p>
          <div className='flex flex-row  justify-around sm:justify-normal xsm:space-x-3 md:space-x-1 xl:space-x-3 flex-wrap gap-1 xsm:gap-0'>
            {sizes.map((size, index) => (
              <button
                key={index}
                // onClick={() => handleThumbnailClick(index)}
                // className={`px-3 py-1 lg:px-6 lg:py-2 border sm:border-2 ${
                //   selectedIndex === index ? 'border-blue-500' : 'border-gray-300'
                // } rounded-lg`}
                className={`px-3 py-1 lg:px-6 lg:py-2 border sm:border-2 border-gray-300 rounded-lg`}
              >
                {size}
              </button>
            ))}
          </div>
          <a 
            href="tel:+998945552208"
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
              Заказать сейчас
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
