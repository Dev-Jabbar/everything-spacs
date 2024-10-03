import React from "react";
import BannerImage from "../../public/banner.png";
import Image from "next/image";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="mt-5 h-72 bg-pink-100 flex justify-between">
      <div className="max-w-4xl ml-20 mt-20 flex flex-col space-y-10">
        <h1 className=" font-extrabold text-3xl">
          Grab up to 50% off on shoes
        </h1>
        <button className="rounded-full px-4 py-1 bg-gray-600 text-white w-40">
          Buy Now
        </button>
      </div>
      <div className="">
        <Image
          src={BannerImage}
          height={500}
          width={500}
          alt="banner Image"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
