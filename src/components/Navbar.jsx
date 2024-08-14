import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-3 md:hidden">
        <h1 className="text-lg">InterviewShare</h1>
        <CiMenuFries size={28} color="gray" className="cursor-pointer" />
      </div>
      <nav className="items-center justify-between hidden px-5 py-3 shadow-md md:flex ">
        <div className="hidden px-4 md:px-0 md:block">
          <h1 className="text-lg">InterviewShare</h1>
        </div>
        <ul className="flex flex-col px-5 py-3 space-y-5 text-sm md:flex-row md:items-center md:justify-end md:space-x-5 md:space-y-0">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">About</li>
          <li className="font-semibold cursor-pointer">Contact</li>
          <li className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg cursor-pointer">
            Your account
          </li>
        </ul>
      </nav>
    </>
  );
}
