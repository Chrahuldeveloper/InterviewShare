import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components";

export default function ReadFullExperience() {
  const interview = useLocation();

  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <div className="max-w-md p-5 space-y-2 md:mx-40">
        <h1 className="text-xl font-semibold">
          {interview.state.company} interview experience
        </h1>
        <p className="text-gray-500">
          Real-time questions & tips from candidates to crack your interview
        </p>
      </div>
      <div className="bg-white border-[1px] border-gray-300 p-5 rounded-lg mx-2 md:max-w-3xl md:mx-44">
        <div className="flex space-x-7">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={interview.state.companyPic}
              alt={interview.state.company}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">{interview.state.position}</h1>
            <p className="font-semibold ">{interview.state.company}</p>
            <p className="text-sm font-semibold text-gray-600">
              {interview.state.rounds} rounds |{" "}
              {interview.state.NumberofProblems} Coding problems
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-sm font-semibold text-green-500">
            {interview.state.selected
              ? "Selected candidate experience"
              : "Not selected"}
          </h1>
        </div>
      </div>

      <div className="bg-white border-[1px] border-gray-300 p-5 md:max-w-3xl md:mx-44 mx-3 my-6 space-y-3">
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Journey</h1>
          <p className="text-sm text-gray-500">{interview.state.experience}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Application story</h1>
          <p className="text-sm text-gray-500">
            {interview.state.applicationStory ||
              "No application story provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">
            Why selected/rejected for the role?
          </h1>
          <p className="text-sm text-gray-500">
            {interview.state.selectionReason || "No reason provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Preparation</h1>
          <p className="text-sm text-gray-500">
            {interview.state.preparation || "No preparation details provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Tip</h1>
          <p className="text-sm text-gray-500">
            {interview.state.tip || "No tips provided."}
          </p>
        </div>
      </div>
    </div>
  );
}
