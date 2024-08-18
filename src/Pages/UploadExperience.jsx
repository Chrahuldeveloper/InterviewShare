import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../components";

export default function UploadExperience({ jwt }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [salaryRange, setSalaryRange] = useState("All");
  const [location, setLocation] = useState("All");
  const [journey, setJourney] = useState("");
  const [applicationStory, setApplicationStory] = useState("");
  const [interviewExperience, setInterviewExperience] = useState("");
  const [preparation, setPreparation] = useState("");
  const [tip, setTip] = useState("");

  const salaryRanges = [
    "All",
    "2 LPA to 5 LPA",
    "5 LPA to 8 LPA",
    "8 LPA to 12 LPA",
    "12 LPA to 20 LPA",
    "20 LPA and above",
  ];

  const handleSubmit = async () => {
    const interviewData = {
      company,
      role,
      salaryRange,
      location,
      journey,
      applicationStory,
      interviewExperience,
      preparation,
      tip,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/interviewUpload/${jwt}`,
        { interview: interviewData }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading interview experience", error);
      alert("Failed to upload experience");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto my-5">
        <div>
          <div className="grid grid-cols-2 gap-3 place-items-center">
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none md:w-[31vw] w-[91vw]"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none md:w-[31vw] w-[91vw] "
              />
            </div>
            <div className="border-[1px] border-gray-200 rounded-lg py-2 text-center col-span-2 ">
              <select
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                className="outline-none  px-3 md:w-[31vw] w-[91vw]"
              >
                {salaryRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-[1px] border-gray-200 rounded-lg py-2 text-center col-span-2 md:w-[31vw] w-[91vw]">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none  px-3 md:w-[31vw] w-[91vw]"
              >
                {salaryRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <textarea
                type="text"
                cols={60}
                rows={5}
                placeholder="Journey"
                value={journey}
                onChange={(e) => setJourney(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2">
              <textarea
                type="text"
                cols={60}
                rows={5}
                placeholder="Application story"
                value={applicationStory}
                onChange={(e) => setApplicationStory(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2">
              <textarea
                type="text"
                cols={60}
                rows={5}
                placeholder="Interview experience"
                value={interviewExperience}
                onChange={(e) => setInterviewExperience(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2">
              <textarea
                type="text"
                cols={60}
                rows={5}
                placeholder="Preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2">
              <textarea
                type="text"
                cols={60}
                rows={5}
                placeholder="Tip"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
                className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
              />
              <div className="mt-5">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white rounded-lg font-semibold w-full  py-2.5"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
