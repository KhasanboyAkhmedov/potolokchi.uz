import { Footer, Navbar } from '@/widgets/layout';
import { useParams } from 'react-router-dom';
import Carousel from '@/components/Carousel';
import carousel from '@/data/carousel-data';
import { routes } from '@/data';


const DetailsPage = () => {
  const { itemName } = useParams();
  const item = carousel.find((item) => item.productname === itemName);

  if (!item) {
    return <div>Item not found</div>;
  }

 
  return (
    <div className='bg-[#00544F]'>
      <div className="fixed w-full bg-[#00544F] z-10 shadow-lg ">
        <Navbar routes={routes}/>
      </div>
      
      <div className='pt-20 sm:pt-28 pb-4 mx-auto'>
        <Carousel images={item.imageUrls} sizes={item.sizes} itemName={item.name} description={item.description}/>
        </div>
      
      <section id='contact-us'>
        <Footer/>
      </section>
    </div>
  )
}

export default DetailsPage

