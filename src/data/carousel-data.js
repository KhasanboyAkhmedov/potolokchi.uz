import { useTranslation } from "react-i18next";

export const useCarousel = () => {
  const { t } = useTranslation();
  return [
    {
      "name" : t("carousel_info.grilyato"),
      "productname": "grilyato",
      "imageUrl": "/img/grilyato_cover.avif",
      "subtypes": [
        {
          "subname": t("carousel_info.classic_grilyato"),
          "imageUrls": [
            "/img/classic_grilyato/1.avif",
            "/img/classic_grilyato/2.avif",
            "/img/classic_grilyato/4.avif",
          ],
          "topSize" : [
            "100x100",
          ],
          "sizes": [
            "50x50",
            "75x75",
            "100x100", 
            "110x110", 
            "120x120",
            "150x150",
            "200x200",
          ],
          "colors": [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
            "bg-[url('/img/derevyaniy-color.png')]"
          ],
          "pdescription": t("carousel_info.classic_grilyato_description")
        },
        {
          "subname": t("carousel_info.pyramid_grilyato"),
          "imageUrls": [
            "/img/piramid_grilyato/1.avif",
            "/img/piramid_grilyato/2.avif",
            "/img/piramid_grilyato/3.avif",
            "/img/piramid_grilyato/4.avif",
          ],
          "topSize" : [
            "50x50",
          ],
          "sizes": [
            "50x50",
            "100x100",
            "150x150",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
          ],
          "pdescription": t("carousel_info.pyramid_grilyato_description"),
        },
        {
          "subname": t("carousel_info.triangular_grilyato"),
          "imageUrls": [
            "/img/treugolniy_grilyato/1.avif",
            "/img/treugolniy_grilyato/2.avif",
            "/img/treugolniy_grilyato/3.avif",
            "/img/treugolniy_grilyato/4.avif",
          ],
          "topSize" : [
            "50x50",
          ],
          "sizes": [
            "50x50",
            "100x100",
            "150x150",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
          ],
          "pdescription": t("carousel_info.triangular_grilyato_description"),
        },
      ],
      "description" : t("carousel_info.grilyato_description"),
    },
    {
      "name" : t("carousel_info.rechniy"),
      "productname": "rechniy",
      "imageUrl": "/img/rechniy/1.avif",
      "subtypes" : [
        {
          "subname": t("carousel_info.classic_rechniy"),
          "imageUrls": [
            "/img/rechniy/1.avif",
            "/img/rechniy/2.avif",
            "/img/rechniy/3.avif",
            "/img/rechniy/4.avif",
          ],
          "topSize" : [
            "50x57",
            "50x87",
          ],
          "sizes": [
            "34x36", 
            "34x57",
            "34x87", 
            "50x57",
            "50x87",
            "50x36",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
          ],
          "pdescription": t("carousel_info.classic_rechniy_description"),
        },
      ],
      "description" : t("carousel_info.rechniy_description"),
      "pdescription" : t("carousel_info.classic_rechniy_description"),
    },
    {
      "name" : t("carousel_info.armstong"),
      "productname": "armstrong",
      "imageUrl": "/img/armstrong_main.jpg",
      "subtypes" : [
        {
          "subname": t("carousel_info.classic_armstrong"),
          "imageUrls": [
            "/img/armstrong/armstrong_kassetniy1.jpg",
            "/img/armstrong/armstrong_kassetniy2.avif",
            "/img/armstrong/armstrong_kassetniy3.avif",
          ],
          "topSize" : [
            
          ],
          "sizes": [
            "595x595",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
          ],
          "pdescription": t("carousel_info.classic_armstrong_description"),
        },
        {
          "subname": t("carousel_info.mineral_armstrong"),
          "imageUrls": [
            "/img/armstrong/armstrong_volokna1.jpg",
            "/img/armstrong/armstrong_volokna2.jpg",
            "/img/armstrong/armstrong_volokna3.avif",
          ],
          "topSize" : [
            
          ],
          "sizes": [
            "595x595",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#000000]",
            "bg-[#a0a0a0]",
            "bg-[#434343]",
          ],
          "pdescription": t("carousel_info.mineral_armstrong_description"),
        },
        {
          "subname": t("carousel_info.folga_armstrong"),
          "imageUrls": [
            "/img/armstrong/armstrong_folga1.avif",
          ],
          "topSize" : [
            
          ],
          "sizes": [
            "595x595",
          ],
          "colors" : [
            "bg-[#ffffff]",
          ],
          "pdescription": t("carousel_info.folga_armstrong_description"),
        },
        {
          "subname": t("carousel_info.gips_armstrong"),
          "imageUrls": [
            "/img/armstrong/armstrong_gips1.avif",
            "/img/armstrong/armstrong_gips2.jpg",
            "/img/armstrong/armstrong_gips3.webp",
          ],
          "topSize" : [
            
          ],
          "sizes": [
            "595x595",
          ],
          "colors" : [
            "bg-[#ffffff]",
          ],
          "pdescription": t("carousel_info.gips_armstrong_description"),
        },
      ],
      "description" : t("carousel_info.armstong_decription"),
    },
    {
      "name" : t("carousel_info.led"),
      "productname": "led",
      "imageUrl": "/img/led-main.jpg",
      "subtypes" : [
        {
          "subname": t("carousel_info.led_armstrong"),
          "imageUrls": [
            "/img/led_armstrong/led_armstrong1.avif",
            "/img/led_armstrong/led_armstrong2.avif",
          ],
          "topSize" : [
          ],
          "sizes": [
            "595x595",
          ],
          "colors" : [
          ],
          "power": [
            "48W",
            "55W",
            "72W",
            "96W",
            "108W",
          ],
          "pdescription" : t("carousel_info.led_armstrong_description"),
        },
        {
          "subname": t("carousel_info.led_grilyato"),
          "imageUrls": [
            "/img/led_grilyato/led_grilyato1.avif",
            "/img/led_grilyato/led_grilyato2.avif",
          ],
          "topSize" : [
          ],
          "sizes": [
            "10x10", 
          ],
          "colors" : [
          ],
          "power": [
            "12W",
          ],
          "pdescription" :  t("carousel_info.led_grilyato_description"),
        },
        {
          "subname": t("carousel_info.led_rechniy"),
          "imageUrls": [
            "/img/led_rechniy/led_rechniy.avif",
            "/img/led_rechniy/led_rechniy1.avif",
            "/img/led_rechniy/led_rechniy3.avif",
          ],
          "topSize" : [
          ],
          "sizes": [
            "30x30",
            "50x50",
            "70x70",
          ],
          "colors" : [
            "bg-[#ffffff]",
            "bg-[#ffff8b]",
            "bg-[#eab910]",
          ],
          "power": [
            "20w", 
            "35w",
            "54w", 
            "72w", 
          ],
          "pdescription" :  t("carousel_info.led_rechniy_description"),
        },
      ],
      "description" : t("carousel_info.led_description"),
    },
  ]
}

export default useCarousel;

