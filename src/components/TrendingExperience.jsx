import React, { useEffect, useState } from "react";
import axios from "axios";
import Empty from "./Empty";

export default function TrendingExperience() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get("/interviews/trending");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the interviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="md:-mt-32 md:ml-16 md:max-w-3xl">
        <div className="flex items-center justify-between px-5 mx-0 ">
          <div className="space-y-2 w-96">
            <h1 className="text-lg font-semibold md:text-xl text-slate-800">
              Most Viewed Interview Experiences
            </h1>
            <p className="text-xs">
              Read more interview experiences and keep yourself up to date
            </p>
          </div>
          <div>
            <h1 className="text-sm font-bold text-blue-500 cursor-pointer">
              View All
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 my-6 md:justify-start md:items-start md:ml-28">
          {data.length > 0 ? (
            data.map((i, idx) => (
              <React.Fragment key={idx}>
                <div className="max-w-md md:max-w-lg lg:max-w-xl p-5 border-[1px] border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold">
                      {i.company} | {i.position} | {i.experience}
                    </h1>
                    <img
                      src={i.companyPic || "defaultImageUrl"}
                      className="rounded-full w-7 h-7"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-10">
                    <img
                      src={i.ProfilePic || "defaultProfilePicUrl"}
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
                        {i.selected ? (
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
                        ) : null}
                      </h1>
                      <ul className="flex items-center gap-x-2 gap-y-1.5 mt-2 flex-wrap text-sm text-gray-600 ">
                        <li>{i.interviewPlace}</li>|<li>{i.collage}</li>|
                        <li>CGPA{i.CGPA}</li>|<li>rounds{i.rounds}</li>|
                        <li>NumberofProblems{i.NumberofProblems}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div >
              <Empty />

            </div>
          )}
        </div>
      </div>
    </>
  );
}
