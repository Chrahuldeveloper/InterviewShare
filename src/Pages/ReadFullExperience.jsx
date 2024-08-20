import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import axios from "axios";
import Loader from "../components/Loader";

export default function ReadFullExperience() {
  const { id } = useParams();
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/interviews/${id}`
        );
        setInterview(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching interview data");
        setLoading(false);
      }
    };

    fetchInterview();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!interview) {
    return <div>No interview data found</div>;
  }

  return (
    <div className="bg-[#fafafa]">
      {loading ? <Loader /> : null}
      <Navbar />
      <div className="max-w-md p-5 space-y-2 md:mx-40">
        <h1 className="text-xl font-semibold">
          {interview.company} interview experience
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
              src={interview.companyPic}
              alt={interview.company}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">{interview.position}</h1>
            <p className="font-semibold ">{interview.company}</p>
            <p className="text-sm font-semibold text-gray-600">
              {interview.rounds} rounds | {interview.NumberofProblems} Coding
              problems
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-sm font-semibold text-green-500">
            {interview.selected
              ? "Selected candidate experience"
              : "Not selected"}
          </h1>
        </div>
      </div>

      <div className="bg-white border-[1px] border-gray-300 p-5 md:max-w-3xl md:mx-44 mx-3 my-6 space-y-3">
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Journey</h1>
          <p className="text-sm text-gray-500">{interview.experience}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Application story</h1>
          <p className="text-sm text-gray-500">
            {interview.applicationStory || "No application story provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">
            Why selected/rejected for the role?
          </h1>
          <p className="text-sm text-gray-500">
            {interview.selectionReason || "No reason provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Preparation</h1>
          <p className="text-sm text-gray-500">
            {interview.preparation || "No preparation details provided."}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Tip</h1>
          <p className="text-sm text-gray-500">
            {interview.tip || "No tips provided."}
          </p>
        </div>
      </div>
    </div>
  );
}
