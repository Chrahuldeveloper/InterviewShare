import React, { useEffect, useState } from "react";
import Empty from "./Empty";

export default function PopularInterview() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/interviews/trending");
        const result = await response.json();
        const filteredInterviews = result.filter(
          (interview) => interview.upvotes > 5
        );
        setInterviews(filteredInterviews);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="md:w-[50vw] mt-10 md:ml-24 bg-white ">
        <div className="px-3.5 space-y-2 w-96">
          <h1 className="text-lg font-semibold md:text-xl text-slate-800">
            Popular Experiences
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 ml-3.5  md:-ml-14 ">
          {interviews.length > 0 ? (
            interviews.map((i, idx) => (
              <div
                key={idx}
                className="max-w-md  md:max-w-lg  lg:max-w-xl mx-auto  p-5 border-[1px] border-gray-300 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold ">
                    {i.company} | {i.position} | {i.experience} | {i.date}
                  </h1>
                  <img
                    src={i.companyPic}
                    className="rounded-full w-7 h-7"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-10">
                  <img
                    src={i.ProfilePic}
                    alt=""
                    className="rounded-full w-7 h-7"
                  />
                  <div>
                    <h1 className="flex items-center gap-3">
                      <span className="font-semibold">{i.Name}</span> |{" "}
                      <span className="text-sm text-gray-800">
                        Level {i.Level}
                      </span>{" "}
                      |{" "}
                      {i.selected && (
                        <div className="flex items-center space-x-1">
                          <img
                            className="w-3.5 h-3.5 rounded-full"
                            src="https://static.naukimg.com/code360/assets/icons/outcome-selected.svg"
                            alt=""
                          />
                          <h1 className="text-[#70bf81] text-sm font-semibold">
                            Selected
                          </h1>
                        </div>
                      )}
                    </h1>
                    <ul className="flex items-center gap-x-2 gap-y-1.5 mt-2 flex-wrap text-sm text-gray-600 ">
                      <li>{i.interviewPlace}</li>|<li>{i.collage}</li>|
                      <li>CGPA{i.CGPA}</li>|<li>rounds{i.rounds}</li>|
                      <li>NumberofProblems{i.NumberofProblems}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
}
