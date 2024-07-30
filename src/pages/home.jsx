import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Footer, Navbar } from "@/widgets/layout";
import MasonryGridGallery from "@/components/mansonry-grid-gallery";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import carousel from "@/data/carousel-data";


export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed w-full bg-[#00544F] z-50">
        <Navbar routes={routes} />
      </div>
      <section id="home" >
        <div className=" flex items-center justify-center max-w-8xl w-full h-[75vh] md:h-screen mx-auto bg-[url('/img/bg_header.jpg')] bg-cover bg-center">
          <div className="flex flex-wrap items-center justify-center h-full">
            <div className="mx-auto w-full px-4 text-center">
              <p className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-siteFont font-medium text-white">
                Потолки нового уровня
              </p>
              <p className="text-white text-sm sm:text-lg lg:text-xl opacity-80 font-siteFont font-medium">
                Мы воплощаем ваши идеи в реальность, создавая уют и стиль!
              </p>
              <Button onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact-us");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }}}
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
                }}>
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="our-products" className=" px-4 pb-20 pt-4 bg-[#00544F]">
        <div className="container mx-auto ">
          <div className="lg:-mt-24 xl:-mt-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-0">
            {[0, 1,2].map((_, index) => (
              <div className="relative  mx-auto w-auto xsm:w-[75%] md:w-auto ">
               <img src={`/img/feature_card_${index + 1}.png`} />
              </div>
            ))}
          </div>
          <div className="w-full mt-12 sm:mt-28 flex flex-wrap items-center ">
            <Typography variant="lead" className="w-full  font-siteFont font-medium text-white text-center mb-16 text-4xl md:text-6xl  xl:text-8xl">
              Наши продукты
            </Typography>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="mx-auto"
              containerClass="container"
              dotListClass=""
              draggable={true}
              focusOnSelect={false}
              infinite
              itemClass="carousel-item"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 640,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 640
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {carousel.map((item, index) => (
                <Card key={index} className=" shadow-lg border shadow-gray-500/10 rounded-lg mx-5">
                  <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src={item.imageUrl}
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody >
                    <Typography
                      variant="h5"
                      className=" mb-3 mt-2 text-[#00544F] font-siteFont font-medium"
                    >
                      {item.name}
                    </Typography>
                    <Typography className="font-normal font-siteFont  text-blue-gray-500">
                      {item.description}
                    </Typography>
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
                      onClick={() => navigate(`/details/${item.productname}`)}
                      >
                      Подробнее...
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    
      <section id="our-work" className="px-4 pt-4 md:pt-30 pb-12 sm:pb-48 bg-[#00544F]">
        <div className="container mx-auto">
          <Typography variant="lead" className="font-siteFont font-medium text-white text-center mb-16 text-4xl md:text-[60px] lg:text-[88px]">
            Наши работы
          </Typography>
          <div className="space-y-11">
            <MasonryGridGallery />
          </div>
        </div>
      </section>
     
      <section id="contact-us"  className="bg-white">
        <Footer />
      </section>
    </>
  );
}




export default Home;
