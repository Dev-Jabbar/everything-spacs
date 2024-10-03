import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
type Props = {};

const SortBar = (props: Props) => {
  return (
    <div className="flex justify-between mt-20 mb-10">
      <div className="flex space-x-4">
        <div className="flex rounded-full cursor-pointer bg-gray-200 px-4 space-x-2  text-gray-600 items-center">
          <span>shoe type</span>
          <IoMdArrowDropdown />
        </div>
        <div className="flex rounded-full cursor-pointer bg-gray-200 px-4 space-x-2  text-gray-600 items-center">
          <span>price</span>
          <IoMdArrowDropdown />
        </div>
        <div className="flex rounded-full cursor-pointer bg-gray-200 px-4 space-x-2  text-gray-600 items-center">
          <span>review</span>
          <IoMdArrowDropdown />
        </div>

        <div className="flex rounded-full cursor-pointer bg-gray-200 px-4 space-x-2  text-gray-600 items-center">
          <span>color</span>
          <IoMdArrowDropdown />
        </div>
        <div className="flex rounded-full cursor-pointer bg-gray-200 px-4 space-x-2  text-gray-600 items-center">
          <span>material</span>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex rounded-full bg-gray-200 cursor-pointer px-4 space-x-2  text-gray-600 items-center">
        <span>sort by</span>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default SortBar;
