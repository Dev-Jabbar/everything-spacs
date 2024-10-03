import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-20 pb-20    flex flex-col text-white space-y-5   bg-black px-60 pt-16">
      <h1 className=" font-extrabold text-3xl">Contact Seller</h1>
      <div className="flex justify-between  ">
        <div className="flex flex-col justify-between space-y-5">
          <span className="text-pink-300 text-xl font-bold">Email</span>
          <span className="text-pink-300 text-xl font-bold">Whatsapp</span>
          <span className="text-pink-300 text-xl font-bold">Facebook</span>
        </div>
        <div className="flex flex-col justify-between space-y-5">
          <span className="font-semibold text-lg">
            momohabduljabbar@gmail.com
          </span>
          <span className="font-semibold text-lg">07066986305</span>
          <span className="font-semibold text-lg">facebook.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
