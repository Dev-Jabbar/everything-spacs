import React from "react";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <span className="cursor-pointer font-extrabold">Spacs Plug</span>
        </div>
        <div className="flex space-x-4">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">New arrivals</span>
          <span className="cursor-pointer">Best Sellers</span>
          <span className="cursor-pointer">Sales/Deals</span>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            id="searchInput"
            placeholder="Search products..."
          />
          <div className="flex items-center cursor-pointer ">
            <span className="mr-1">
              <VscAccount className="w-4 h-4" />
            </span>
            Account
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="mr-1">
              <CiShoppingCart className="w-5 h-5" />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
