import React from "react";
import { Navbar, TrendingExperience } from "../components";

export default function ReadFullExperience() {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <div className="max-w-md p-5 space-y-2 md:mx-40">
        <h1 className="text-xl font-semibold">Amazon interview experience</h1>
        <p className="text-gray-500">
          Real time questions & tips from candidates to crack your interview
        </p>
      </div>
      <div className="bg-white border-[1px] border-gray-300 p-5 rounded-lg mx-2 md:max-w-3xl md:mx-44">
        <div className="flex space-x-7">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">SDE - 1</h1>
            <p className="font-semibold ">Amazon</p>
            <p className="text-sm font-semibold text-gray-600">
              5 rounds | 12 Coding problems
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-sm font-semibold text-green-500">
            Selected candidate experience
          </h1>
        </div>
      </div>

      <div className="bg-white border-[1px] border-gray-300 p-5 md:max-w-3xl md:mx-44  mx-3 my-6 space-y-3">
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Journey</h1>
          <p className="text-sm text-gray-500">
            I started my journey in coding from second year after being
            motivated from my seniors. I initially started my journey by
            learning basic programming languages. Later, I started giving
            contests on code forces and solving questions on it. I kept trying
            to be consistent in doing so. After 2-3 months I was able to solve
            some questions on code forces. Then in my third year, I studied core
            subjects like OS, DBMS, OOPS and CN in depth. In this manner, I was
            well prepared before the placement season.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Application story</h1>
          <p className="text-sm text-gray-500">
            I got this opportunity through campus placements. Amazon visited our
            campus for internships and placements. I applied through my resume
            on their portal.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">
            Why selected/rejected for the role?
          </h1>
          <p className="text-sm text-gray-500">
            I was able to solve almost all the questions asked me during the
            selection process. I have done a lot of coding practise on
            Competitive programming sites and built a deep understanding of
            programming skills. My good communication skills are also one reason
            of my selection.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Preparation</h1>
          <p className="text-sm text-gray-500">
            Topics: Data Structures and Algorithms, Operating System, Database
            Management System, Object-Oriented Programming System
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Tip</h1>
          <p className="text-sm text-gray-500">
            Do lot of hard work and practice of Data Structures and Algorithms
            based questions. I personally recommend you Coding Ninjas and Geeks
            For Geeks for interview preparation.
          </p>
        </div>
      </div>
      <TrendingExperience />
    </div>
  );
}
