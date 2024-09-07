import { useTranslation } from "react-i18next";

export const useOurWork = () => {
  const { t } = useTranslation();
  return [
    {
        name: t("carousel_info.grilyato"),
        imageUrls: [
          "/img/grilyato/IMG_1.JPG",
          "/img/grilyato/IMG_2.JPG",
          "/img/grilyato/IMG_3.JPG",
          "/img/grilyato/IMG_4.JPG",
          "/img/grilyato/IMG_5.JPG",
          "/img/grilyato/IMG_6.JPG",
          "/img/grilyato/IMG_6.JPEG",
          "/img/grilyato/IMG_7.JPG",
          "/img/grilyato/IMG_8.JPG",
          "/img/grilyato/IMG_9.JPG",
          "/img/grilyato/IMG_10.JPG",
        ],
      },
      {
        name: t("carousel_info.rechniy"),
        imageUrls: [
            "/img/rechniy/IMG_1.JPG",
            "/img/rechniy/IMG_2.JPG",
            "/img/rechniy/IMG_3.JPG",
            "/img/rechniy/IMG_4.JPG",
            "/img/rechniy/IMG_7.JPG",
            "/img/rechniy/IMG_8.JPG",
            "/img/rechniy/IMG_9.JPG",
            "/img/rechniy/IMG_10.JPG",
            "/img/rechniy/IMG_11.JPG",
            "/img/rechniy/IMG_13.jpg",
        ],
      },
      {
        name: t("carousel_info.armstong"),
        imageUrls: [
          "/img/armstrong/IMG_1.JPG",
          "/img/armstrong/IMG_2.JPG",
          "/img/armstrong/IMG_3.JPG",
          "/img/armstrong/IMG_4.JPG",
          "/img/armstrong/IMG_5.JPG",
        ],
      },
  ]
}

export default useOurWork