import React from "react";

export default function EditModel() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-md">
      <div className="p-5 bg-white rounded-md lg:w-[30vw]">
        <div className="flex flex-col space-y-3">
          <label className="font-semibold text-slate-800">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col mt-3 space-y-3">
          <label className="font-semibold text-slate-800">Bio</label>
          <input
            type="text"
            placeholder="Your Bio"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="mt-5">
          <button className="bg-blue-600 text-white rounded-lg font-semibold w-full py-2.5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
