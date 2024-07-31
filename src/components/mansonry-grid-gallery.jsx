import { Button } from "@material-tailwind/react";
import { useState } from "react";

const data = [
  {
    name: "Грилято",
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
    name: "Речный",
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
    name: "Армстронг",
    imageUrls: [
      "/img/armstrong/IMG_1.JPG",
      "/img/armstrong/IMG_2.JPG",
      "/img/armstrong/IMG_3.JPG",
      "/img/armstrong/IMG_4.JPG",
      "/img/armstrong/IMG_5.JPG",
    ],
  },
  
];

export default function TabOurwork() {
  const [selectedImages, setSelectedImages] = useState(data[0].imageUrls);
  const [activeButton, setActiveButton] = useState(data[0].name);

  const handleButtonClick = (category) => {
    const selectedCategory = data.find((item) => item.name === category);
    setSelectedImages(selectedCategory.imageUrls);
    setActiveButton(category);
  };

  return (
    <>
      <div className="flex flex-wrap flex-row  justify-center xsm:justify-evenly items-center gap-4  sm:gap-10">
        {data.map((item) => (
          <Button
            key={item.name}
            className={`rounded-full font-siteFont text-white lg:text-sm ${
              activeButton === item.name
                ? "border-transparent"
                : "border-white"
            }`}
            variant="outlined"
            style={
              activeButton === item.name
                ? {
                    background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
                    boxShadow: '0px -4px 35px rgba(187, 130, 74, 0.35), 0px 20px 30px rgba(233, 199, 117, 0.4)',  
                    transition: 'all .3s',
                  }
                : {}
            }
            onMouseEnter={(e) => {
              if (activeButton === item.name) {
                e.currentTarget.style.backgroundSize = "200% 100%";
              }
            }}
            onMouseLeave={(e) => {
              if (activeButton === item.name) {
                e.currentTarget.style.backgroundSize = "100% 40%";
              }
            }}
            onClick={() => handleButtonClick(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {selectedImages.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img
                className="border-2 border-orange-300 h-[250px] lg:h-[350px] xl:h-[400px] max-w-full sm:w-[250px] md:max-w-full  lg:w-[300px] rounded-lg object-cover object-center"
                src={src}
                alt="Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
