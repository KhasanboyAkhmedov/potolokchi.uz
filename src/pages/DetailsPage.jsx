import { Footer, Navbar } from '@/widgets/layout';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '@/components/Carousel';
import carousel from '@/data/carousel-data';
import { routes } from '@/data';


const DetailsPage = () => {
  const { itemName } = useParams();
  const item = carousel.find((item) => item.productname === itemName);
  const navigate = useNavigate();

  if (!item) {
    return <div>Item not found</div>;
  }

 
  return (
    <div className='min-h-screen w-full flex flex-col bg-[#00544F] '>

      <div className="fixed w-full bg-[#00544F] z-10 shadow-lg flex justify-center ">
        <Navbar routes={routes}/>
      </div>
      
      <div className='w-full bg-[#00544F] pt-20 sm:pt-28 pb-4 mx-auto'>
        <div className='mx-auto md:ml-2 w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/3 2xl:w-[35%] 3xl:w-[40%] xl:ml-16 py-5 mb-5 flex flex-row  justify-around overflow-x-auto whitespace-nowrap'>
          {carousel.map((el, index) => (
            <p 
              key={index} 
              className='text-white capitalize 3xl:text-xl  font-siteFont font-semibold tracking-wide mx-1'
              onClick={() => navigate(`/details/${el.productname}`)}
              >
              {el.name}
              {el.productname === item.productname 
              && <div className='h-[1px] w-full mt-1'
              style={{
                background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
                }}
            />}
            </p>
          ))}
        </div>
        {item.subtypes.map((product, index) => (
          <Carousel key={index} product={product} images={product.imageUrls} productname={item.productname} />
        ))}
      </div>

      {/* <section id='contact-us'>
        <Footer/>
      </section> */}
    </div>
  )
}

export default DetailsPage

