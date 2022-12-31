import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

type Props = {};

const Slider = (props: Props) => {
  const [index, setIndex] = React.useState<number>(0);
  const images = [
    "/img/mahadev-ittina-thrL1vpNO9U-unsplash.jpg",
    "/img/omkar-jadhav-o5XB6XwTb1I-unsplash.jpg",
    "/img/umesh-soni-g1qlhFbWPKg-unsplash.jpg",
  ];

  const handleArrow = (arrowDirection: string): void => {
    if (arrowDirection === "l") {
      return setIndex(index !== 0 ? index - 1 : 2);
    }
    return setIndex(index !== 2 ? index + 1 : 0);
  };
  return (
    <div className="h-[calc(100vh_-_96px)] bg-[#F58B4C] overflow-hidden">
      <div
        className="absolute w-[10%] h-1/5 top-0 bottom-0 m-auto left-0 cursor-pointer z-10"
        onClick={() => handleArrow("l")}
      >
        <BsArrowLeftShort size={150} color="#fff"></BsArrowLeftShort>
      </div>
      <div
        className={`w-[300vw] h-full flex transition-all duration-1000 ease-in-out`}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="w-[100vw] h-full relative">
            <Image
              src={`${img}`}
              key={i}
              alt={i.toString()}
              fill={true}
            ></Image>
          </div>
        ))}
      </div>
      <div
        className="absolute w-[10%] h-1/5 top-0 bottom-0 m-auto right-0 cursor-pointer z-10"
        onClick={() => handleArrow("r")}
      >
        <BsArrowRightShort size={150} color="#fff"></BsArrowRightShort>
      </div>
    </div>
  );
};

export default Slider;
