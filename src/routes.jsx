// import { Home, } from "@/pages";

// export const routes = [
//   {
//     name: "Главная",
//     path: "#home",
//     // element: <Home />,
//   },
//   {
//     name: "Продукты",
//     path: "#our-products",
//   },
//   {
//     name: "Наши работы",
//     path: "#our-work",
//   },
//   {
//     name: "Контакты",
//     path: "#contact-us",
//   },
// ];

// export default routes;

import { useTranslation } from 'react-i18next';
import { Home } from "@/pages";

export const useRoutes = () => {
  const { t } = useTranslation();

  return [
    {
      name: t('navbar.home'),
      path: "#home",
      // element: <Home />,
    },
    {
      name: t('navbar.products'),
      path: "#our-products",
    },
    {
      name: t('navbar.work'),
      path: "#our-work",
    },
    {
      name: t('navbar.contact'),
      path: "#contact-us",
    },
  ];
};

export default useRoutes;
