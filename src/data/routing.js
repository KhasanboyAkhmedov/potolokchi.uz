import { useTranslation } from 'react-i18next';

export const useInnerRouter = () => {
  const { t } = useTranslation();

  return [
    {
      name: t("navbar.home"),
      path: "/#home",
      main: '/',
      // element: <Home />,
    },
    {
      name: t("navbar.products"),
      path: "/#our-products",
      main: '/',
    },
    {
      name: t("navbar.work"),
      path: "/#our-work",
      main: '/',
    },
    {
      name: t("navbar.contact"),
      path: "/#contact-us",
      main: '/',
    },
  ];
};

export default useInnerRouter;


// export const routes = [
//     {
//       name: "Главная",
//       path: "/#home",
//       main: '/'
//       // element: <Home />,
//     },
//     {
//       name: "Продукты",
//       path: "/#our-products",
//       main: '/'
//     },
//     {
//       name: "Наши работы",
//       path: "/#our-work",
//       main: '/'
//     },
//     {
//       name: "Контакты",
//       path: "/#contact-us",
//       main: '/'
//     },
//   ];
  
//   export default routes;