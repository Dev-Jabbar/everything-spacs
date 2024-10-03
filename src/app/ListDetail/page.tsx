import React from "react";
import { CiStar } from "react-icons/ci";
import timberland from "../../../public/Timberland.png";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex space-x-20 ">
        <div className="bg-gray-200 h-[500px] w-[500px] p-20">
          <Image
            src={timberland}
            height={1000}
            width={1000}
            alt="timberland"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col space-y-6 ">
          <h1 className="font-extrabold text-xl">Brown Timberland</h1>
          <p className="max-w-2xl">
            Timberland shoes offer rugged durability, timeless style, and
            eco-friendly craftsmanship, perfect for both outdoor adventures and
            everyday wear.
          </p>
          <div className="flex  text-sm items-center space-x-1 ">
            <div className="flex text-green-600">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </div>
            <span>(121)</span>
          </div>
          <div className="bg-gray-200 h-[1px] w-full"></div>

          <div className="flex flex-col space-y-2 pb-4">
            <p className="font-semibold"> $549.00 or 99.99/month</p>
            <p className="text-xs font-medium">
              Suggested payments with 6 months special financing
            </p>
          </div>

          <div className="bg-gray-200 h-[1px] w-full"></div>
          <div className="flex flex-col space-y-12 pb-4">
            <div className="font-semibold  flex space-x-10 items-center">
              <div className="rounded-full bg-gray-200 flex space-x-7 px-5 py-2">
                <span className="cursor-pointer">-</span>
                <span className="cursor-pointer">1</span>
                <span className="cursor-pointer">+</span>
              </div>
              <div className="flex flex-col text-xs ">
                <div>
                  only <span className="text-orange-500">12</span> items left
                </div>
                <span>dont miss it</span>
              </div>
            </div>
            <div className="bg-gray-200 h-[1px] w-full"></div>
            <div className="flex space-x-6">
              <div className="rounded-full bg-green-950 text-white px-12 py-2 cursor-pointer">
                Buy now
              </div>

              <div className="rounded-full text-green-950 border-green-950 border-2 px-10 py-2 cursor-pointer">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
