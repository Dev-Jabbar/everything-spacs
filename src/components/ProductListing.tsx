import React from "react";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Oxford_derby from "./../../public/oxford_derby.png";
import timberland from "./../../public/Timberland.png";
import Image from "next/image";
type Props = {};

const ProductListing = (props: Props) => {
  const products = [
    {
      id: 1,
      product_image: timberland,
      title: "Timberland",
      details: "blends durability and style for any adventure.",
    },
    {
      id: 2,
      product_image: Oxford_derby,
      title: "Oxford Derby",
      details: "blends durability and style for any adventure.",
    },
    {
      id: 3,
      product_image: timberland,
      title: "Timberland",
      details: "blends durability and style for any adventure.",
    },
    {
      id: 4,
      product_image: timberland,
      title: "Timberland",
      details: "blends durability and style for any adventure.",
    },
    {
      id: 5,
      product_image: timberland,
      title: "Timberland",
      details: "blends durability and style for any adventure.",
    },
    {
      id: 6,
      product_image: timberland,
      title: "Timberland",
      details: "blends durability and style for any adventure.",
    },
  ];
  return (
    <div className="mt-10 ">
      <h1 className="font-extrabold text-xl mb-10">Men Shoes</h1>
      <div className="grid grid-cols-4 gap-x-4  gap-y-6">
        {products.map((product) => {
          return (
            <div className=" flex flex-col space-y-2" key={product.id}>
              <div className="bg-gray-100 h-[200px] relative flex items-center justify-center">
                <Image
                  height={500}
                  width={500}
                  alt="timberland"
                  src={product.product_image}
                  className="h-40 w-40"
                />
                <div className="absolute top-4 rounded-full bg-white p-1 right-4 cursor-pointer">
                  <CiHeart className="text-black h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-start">
                <h1 className="font-semibold">{product.title}</h1>
                <p className="text-sm max-w-60 text-gray-600">
                  {product.details}
                </p>
                <div className="flex  text-sm items-center space-x-1 ">
                  <div className="flex text-green-600">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                  <span>(121)</span>
                </div>
                <button className="rounded-full border-black px-4 py-1 border-2">
                  <h1 className="text-xs">Add to cart</h1>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
