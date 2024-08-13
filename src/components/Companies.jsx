import React from "react";

export default function Companies() {
  const comapnies = [
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
    "https://files.codingninjas.in/amazon-ps-4659.svg",
  ];

  return (
    <>
     <div className="flex items-center justify-between px-5 mt-6 md:max-w-4xl md:px-36">
        <div className="space-y-2 w-80 ">
          <h1 className="text-lg font-semibold text-slate-800 md:text-xl">
            Most Viewed Interview Experiences
          </h1>
          <p className="text-xs md:text-lg">
            Read more interview experiences and keep yourself up to date
          </p>
        </div>
        <div>
          <h1 className="text-sm font-bold text-blue-500">View All</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-[100vw] gap-5 px-5 mx-auto my-5">
        {comapnies.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="p-5 border-[1px] border-gray-300 rounded-lg flex justify-center w-36">
                <img src={_} alt="" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
