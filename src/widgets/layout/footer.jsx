import PropTypes from "prop-types";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" font-siteFont ">
      <div className="relative h-full w-full bg-[url('/img/bg_footer.jpg')] bg-cover bg-center flex justify-center md:justify-end sm:pt-10 sm:pb-[50px] md:pb-[100px] ">
        
        <div className="bg-[#00544F] max-w-xl w-full sm:w-auto px-8 py-12 sm:py-16 mx-auto md:mr-8 sm:rounded-3xl space-y-6">
          <div className="flex items-center gap-4">
            <img
              className="h-6 w-auto"
             src="/img/gps.png"
             alt="location"
            />
            <a href='https://yandex.ru/maps?whatshere%5Bpoint%5D=69.33813607119373%2C41.27625253467027&whatshere%5Bzoom%5D=17.13989&ll=69.33813607119373%2C41.27625253429472&z=17.13989&si=etvpc8cmazrj0mkc8aygc4h07r'
              target="_blank" rel="noopener noreferrer"
              className="text-white text-lg md:text-xl lg:text-[21px]">
              Джаркурганская улица, 20/3, Ташкент
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/phone-call.png"
             alt="phone"
            />
            <a href="tel:+998945552208" className="text-white text-lg md:text-xl lg:text-[21px]">
            +998 (94) 555-22-08
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/phone-call.png"
             alt="phone"
            />
            <a href="tel:+998945552204" className="text-white text-lg md:text-xl lg:text-[21px]">
            +998 (94) 555-22-04
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/instagram.png"
             alt="instagram"
            />
            <a href="https://www.instagram.com/potolokchi.uz"  target="_blank" rel="noopener noreferrer"className="text-white text-lg md:text-xl lg:text-[21px]">Instagram</a>
          </div>
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/facebook.png"
             alt="facebook"
            />
            <a href="/" className="text-white text-lg md:text-xl lg:text-[21px]">Facebook</a>
          </div>
          
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/telegram.png"
             alt="telegram"
            />
            <a href="/" className="text-white text-lg md:text-xl lg:text-[21px]">
              Telegram
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
            className="h-6 w-auto"
             src="/img/instagram.png"
             alt="youtube"
            />
            <a href="https://www.youtube.com/@potolokchiuz"  target="_blank" rel="noopener noreferrer" className="text-white text-lg md:text-xl lg:text-[21px]">Youtube</a>
          </div>
          <div className="flex justify-center ">
            <Button 
              className="rounded-full mt-4 font-siteFont font-medium px-8 py-5 " 
              style={{
                background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
                boxShadow: '0px -4px 35px rgba(187, 130, 74, 0.35), 0px 20px 30px rgba(233, 199, 117, 0.4)',
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
                Перезвоните мне
                </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}



Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
