import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function SignupForm() {
  return (
    <div className=" max-w-md mx-auto mt-8 border-[1px] p-8 border-gray-300 rounded-lg">
      <div className="text-slate-800 space-y-4">
        <h1 className="text-2xl font-bold">SignUp</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <form className="mt-4 space-y-6">
        <div className="space-y-3 flex flex-col">
          <label className="text-slate-800 font-semibold">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="space-y-3 flex flex-col">
          <label className="text-slate-800 font-semibold">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white rounded-lg font-semibold w-full py-2.5">
            Sign in
          </button>
        </div>
      </form>

      <div className="my-6">
        <h1 className="text-center text-gray-400 font-semibold">
          --Or Sign Up using--
        </h1>
        <div className="flex justify-center mt-4 border-[1px] w-14 h-14 items-center rounded-full mx-auto p-4">
          <FaGoogle size={40} />
        </div>
      </div>

      <div className="text-center">
        <p>
          Already a User?
          <span className="text-blue-500 font-bold"> Login</span>
        </p>
      </div>
    </div>
  );
}
