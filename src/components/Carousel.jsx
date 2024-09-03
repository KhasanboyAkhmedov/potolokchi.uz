import { useState } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import topSaleProduct from '../../public/img/topSales.png'

const Carousel = ({product, images, productname}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);  

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
    <div  className='flex flex-col md:flex-row  justify-around mb-12 w-full'>
      <div className='px-4'>
        <div className="relative w-full  h-full sm:h-[300px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[400px] xl:w-[580px] xl:h-[400px] 3xl:w-[800px] 3xl:h-[500px] rounded-xl ">
          <img
            src={product.imageUrls[selectedIndex]}
            alt={`Slide ${selectedIndex}`}
            className="w-full h-full object-cover rounded-xl"
          />
          {product.imageUrls && product.imageUrls.length > 1 
          && <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              
              <ArrowLongLeftIcon className="w-6 h-6 3xl:w-8 3xl:h-8 text-[#E9C775]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >

              <ArrowLongRightIcon className="w-6 h-6 3xl:w-8 3xl:h-8 text-[#E9C775]" />
            </button>
          </>  
          }

        </div>

        {/* Thumbnails */}
        <div className=" flex items-center justify-around mt-4 space-x-2">
          {product.imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-16 h-14 xsm:w-24 xsm:h-16 sm:w-28 sm:h-20 md:w-20 lg:w-24 xl:w-32 md:h-16 xl:h-20 3xl:w-40 3xl:h-28 object-cover cursor-pointer border-2  rounded-lg ${
                selectedIndex === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full  md:mt-0 lg:w-1/2 flex  flex-col space-y-4 lg:space-y-8 text-center  items-center md:text-start  md:items-start text-white flex-wrap px-3 md:px-4 lg:px-6 xl:px-8">
        <h1 className='text-4xl lg:text-6xl xl:text-7xl 3xl:text-8xl  font-semibold'>{product.subname}</h1>
        <p className='text-sm lg:text-base xl:text-sm  3xl:text-xl'>{product.pdescription}</p>
        {productname !== 'led' &&
        <div className='flex flex-row  justify-center sm:justify-center md:justify-normal  xsm:space-x-1  md:space-x-1 flex-wrap gap-1 '>
          {product.sizes.map((size, index) => (
            <div className='relative' key={index}>
              <button
                key={index}
                className={`3xl:px-6 3xl:py-2 3xl:text-2xl px-3 py-1 lg:px-6 lg:py-2  border sm:border-2 border-gray-300 rounded-lg`}
              >
                {size}
              </button>
              {product.topSize.includes(size) && 
                <img src={topSaleProduct} className='w-10 md:w-11 lg:w-12 2xl:w-14 absolute top-0 right-2 transform translate-x-1/2 -translate-y-1/2 font-semibold px-1 '/>
              }
            </div>
          ))}
        </div>
        }
        {product.subname == 'Led для Реечных потолков' &&
          <>
            <p className='text-xl bg-gradient-to-t from-[#BB824A] to-[#E9C775] bg-clip-text text-transparent'>
              Алюминиевые Рейки лед 50mm
            </p>
            <div>
              {product.colors.length > 0 && 
                <div className='flex flex-row items-center'>
                  <p className='text-base lg:text-lg 3xl:text-xl md:mr-2 lg:mr-1 3xl:mr-4'>
                    Цвета:
                  </p>
                  {product.colors.map((color, index) => (
                    <div key={index} className={`w-8 h-8 3xl:w-10 3xl:h-10 ${color} mx-1 lg:mx-1 rounded-lg`}/>
                  ))}
                </div>
              }
            </div>
          </>

        }
        

        {product.power && product.power.length > 0 && 
          <div className='flex flex-col  sm:justify-center md:justify-normal  xsm:space-x-1  md:space-x-1 flex-wrap gap-1 '>
            {product.subname == 'Led для Реечных потолков' &&
              <p className='text-xl mb-5 bg-gradient-to-t from-[#BB824A] to-[#E9C775] bg-clip-text text-transparent'>
                Размеры: 30cm, 50cm, 70cm
              </p>
            }
            <p className='text-base lg:text-lg mb-4'>
              • Мощность {product.subname == 'Led для Реечных потолков' && "(1 метр)"}
            </p>
            <div className='flex flex-row items-center justify-center md:justify-start gap-1 flex-wrap'>
              {product.power.map((pow, index) => (
                <button
                  key={index}
                  className={`3xl:px-6 3xl:py-2 3xl:text-2xl px-3 py-1 lg:px-6 lg:py-2 3xl:mr-2 border sm:border-2 border-gray-300 rounded-3xl`}
                >
                  {pow}
                </button>
              ))}
            </div>
            
  
          </div>
        }
        
        <div className='flex flex-col md:flex-row  items-center justify-evenly md:justify-between w-full flex-wrap lg:flex-nowrap'>
          {product.colors.length > 0 && product.subname !== 'Led для Реечных потолков' &&
          <div className='flex flex-row items-center'>
            <p className='text-base lg:text-lg 3xl:text-xl md:mr-2 lg:mr-1 3xl:mr-4'>
              Цвета:
            </p>
            {product.colors.map((color, index) => (
              <div key={index} className={`w-8 h-8 3xl:w-10 3xl:h-10 ${color} mx-1 lg:mx-1 rounded-lg`}/>
            ))}
          </div>}
          
          <a 
            href="tel:+998335552204"
            className="3xl:text-xl 3xl:px-10 3xl:py-5 mt-3 lg:mt-0 rounded-full  px-6 py-4 sm:px-8 sm:py-5 font-siteFont font-medium whitespace-nowrap"
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
