import React from "react";
import Image from "next/image";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="w-1/3 py-5 px-10 flex flex-col justify items-center justify-self-start cursor-pointer hover:bg-gray-200 duration-200">
      <Image src={"/img/umesh-soni-g1qlhFbWPKg-unsplash.jpg"} alt="food" width={100} height={100}></Image>
      <h1 className="text-[#F5BA8C] font-bold text-xl">Lorem, ipsum dolor.</h1>
      <span className="text-green-500 font-medium text-lg">₹ 199.99/-</span>
      <p className="text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  );
};

export default Card;
