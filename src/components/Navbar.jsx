import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <div className="md:hidden flex  justify-between px-5 py-3">
        <h1 className="text-lg">InterviewShare</h1>
        <CiMenuFries size={28} color="gray" className="cursor-pointer" />
      </div>
      <nav className="md:flex justify-between items-center shadow-md py-3 px-5 hidden ">
        <div className="px-4 md:px-0 hidden md:block">
          <h1 className="text-lg">InterviewShare</h1>
        </div>
        <ul className="flex md:flex-row flex-col md:items-center md:justify-end md:space-x-5 space-y-5 md:space-y-0  px-5 py-3 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Home</li>
        </ul>
      </nav>
    </>
  );
}
