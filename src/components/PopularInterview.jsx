import React, { useEffect, useState } from "react";
import Empty from "./Empty";
import { Link } from "react-router-dom";

export default function PopularInterview() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/interviews/trending"
        );
        const result = await response.json();
        const filteredInterviews = result.filter(
          (interview) => interview.upvotes >= 5
        );
        console.log(filteredInterviews);
        setInterviews(filteredInterviews);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="md:w-[50vw] mt-10 mx-auto">
        <div className="px-3.5 space-y-2 w-96">
          <h1 className="text-lg font-semibold lg:text-2xl md:text-xl text-slate-800">
            Popular Experiences
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 ">
          {interviews.length > 0 ? (
            interviews.map((i, idx) => (
              <Link
                to={`/interview/${i._id}`}
                state={{
                  company: i.company,
                  companyPic: i.companyPic,
                  position: i.position,
                  experience: i.experience,
                  date: i.date,
                  Name: i.Name,
                  selected: i.selected,
                  Level: i.Level,
                  rounds: i.rounds,
                  CGPA: i.CGPA,
                  NumberofProblems: i.NumberofProblems,
                  ProfilePic: i.ProfilePic,
                  interviewPlace: i.interviewPlace,
                  collage: i.collage,
                  Likes: i.Likes,
                  upvotes: i.upvotes,
                  _id: i._id,
                }}
                className="w-[80vw] md:w-[50vw] lg:w-[40vw] mx-auto p-5 border-[1px] border-gray-300 rounded-lg cursor-pointer"
              >
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold ">
                      {i.company} | {i.position}
                    </h1>
                    <img
                      src={i.companyPic}
                      className="w-10 h-10 rounded-full border-[1px] border-gray-300"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-10">
                    <img
                      src={i.ProfilePic}
                      alt=""
                      className="object-cover w-10 h-10 rounded-full border-[1px] border-gray-300"
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
                      <ul className="flex items-center gap-x-2 gap-y-1.5 mt-2 flex-wrap text-sm text-gray-600">
                        <li>{i.interviewPlace}</li>|<li>{i.college}</li>|
                        <li>CGPA {i.CGPA}</li>|<li>{i.rounds} rounds</li>|
                        <li>{i.NumberofProblems} problems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
}
