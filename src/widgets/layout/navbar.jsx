import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LanguageToggler from "@/components/language-switcher";

export function Navbar({ routes }) {
  const [openNav, setOpenNav] = useState(false);
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex text-[24px]  flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      {routes.map(({ name, path, icon, main, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="paragraph"
          color="inherit"
          className="capitalize 3xl:text-xl whitespace-nowrap"
        >
          {main ? 
            <Link 
              to={path} 
              className="flex items-center gap-1 p-1 font-bold font-siteFont ">
              {name}
            </Link>
          : <a 
              href={path}
              onClick={(e) =>{
                e.preventDefault();
                const targetId = path.split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-1 p-1 font-bold font-siteFont ">
            {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
            </a>}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="w-full 2xl:max-w-full mx-auto 2xl:mx-[2%]">
      <div className=" flex items-center justify-between text-white">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="h-8 vsm:h-6 xsm:h-10 sm:h-10 md:h-12 w-auto 3xl:h-16 "
            src="/img/logo.png"
            alt="logo"
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center">
          <LanguageToggler/>
          <IconButton
            variant="text"
            size="sm"
            color="white"
            className="ml-auto text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Close menu" : "Open menu"}
          >
            {openNav ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse
        className={`${ openNav && 'my-2'} rounded-xl  bg-white px-4  text-blue-gray-900`}
        open={openNav}
      >
        <div className="container mx-auto" onClick={() => setOpenNav(!openNav)} >
          {navList}
        </div>
      </Collapse>
    </MTNavbar>
  );
}


export default Navbar;
