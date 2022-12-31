import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-[calc(100vh_-_96px)] bg-gray-600 flex">
      <div className="flex-1 relative flex">
        <Image
          src={"/img/juri-gianfrancesco-rTFS5bQrXZk-unsplash.jpg"}
          alt=""
          fill={true}
          className="object-cover self-baseline"
        ></Image>
      </div>
      <div className="flex-[2] relative flex gap-5 justify-around mx-10 items-center">
        <div>
          <h1 className=" text-4xl font-bold text-white text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
        </div>
        <div>
          <h1 className="text-yellow-600 text-xl font-semibold">
            Find the restaurant
          </h1>
          <p className="text-gray-300">123 st., Mumbai, India</p>
          <p className="text-gray-300">123 st., Mumbai, India</p>
          <p className="text-gray-300">123 st., Mumbai, India</p>
        </div>
        <div>
          <h1 className=" text-yellow-600 text-lg font-semibold">
            Working hours
          </h1>
          <p className="text-gray-300">10:00AM - 9:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
