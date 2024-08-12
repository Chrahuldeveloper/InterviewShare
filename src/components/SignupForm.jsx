import React from "react";

export default function SignupForm() {
  return (
    <div className="max-w-sm md:max-w-md mx-auto mt-8">
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
      <div>
        
      </div>
    </div>
  );
}
