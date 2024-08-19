import React from "react";
import PopularInterview from "./PopularInterview";

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
    <div className="flex flex-col items-start justify-between md:flex-row">
      <div className="md:ml-16">
        <div className="flex items-center justify-between px-5 mt-10 md:w-[50vw] ">
          <div className="space-y-2 w-96 ">
            <h1 className="text-lg font-semibold md:text-xl text-slate-800">
              Most Viewed Interview Experiences
            </h1>
            <p className="text-xs">
              Read more interview experiences and keep yourself up to date
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 px-5 mx-auto mt-8 md:max-w-3xl">
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
      </div>
      <PopularInterview />
    </div>
  );
}
