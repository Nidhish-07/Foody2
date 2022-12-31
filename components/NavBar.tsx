import React from "react";
import Image from "next/image";
import { BsTelephone, BsCart } from "react-icons/bs";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="h-24 py-0 px-1 bg-[#F58B4C] flex justify-between items-center sticky top-0 z-50">
      <div className="flex-1 flex items-center">
        <div>
          <BsTelephone
            size={32}
            className="bg-white rounded-full p-2 w-12 h-12"
          ></BsTelephone>
        </div>
        <div className="m-5 text-white">
          <div className="text-xs font-medium">ORDER NOW!</div>
          <div className="text-xl font-bold">1234567890</div>
        </div>
      </div>
      <div className="flex-[3] flex items-center ">
        <ul className="p-0 flex items-center justify-around text-white gap-5 font-bold w-full">
          <li className="text-4xl mr-6">LOGO</li>
          <li>Homepage</li>
          <li>Products</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex-[0.25] flex items-center justify-end mr-8">
        <div className="relative">
          <BsCart size={44} color={"#fff"}></BsCart>
          <div className="text-sm absolute left-4 bottom-4 rounded-full bg-white w-4 h-4 flex items-center justify-center">
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
