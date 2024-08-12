import React from "react";

export default function TrendingExperience() {
  const data = [
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "on campus",
      collage: "CMRCET",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-6">
        <div className="w-80 space-y-2">
          <h1 className="text-lg text-slate-800 font-semibold">
            Most Viewed Interview Experiences
          </h1>
          <p className="text-xs">
            Read more interview experiences and keep yourself up to date
          </p>
        </div>
        <div>
          <h1 className="text-sm font-bold text-blue-500">View All</h1>
        </div>
      </div>
     <div className="flex flex-col justify-center items-center my-6 gap-6">
      {data.map((i, idx) => {
        return (
          <React.Fragment key={idx}>
            <div className="max-w-md p-5 border-[1px] border-gray-300 rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">
                  {i.company} | {i.position} | {i.experience} | {i.date}
                </h1>
                <img
                  src={i.companyPic}
                  className="w-7 h-7 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-10">
                <img
                  src={i.ProfilePic}
                  alt=""
                  className="w-7 h-7 rounded-full"
                />
                <div>
                  <h1 className="flex gap-3 items-center">
                    <span className="font-semibold">{i.Name}</span> |{" "}
                    <span className="text-gray-800 text-sm">
                      Level {i.Level}
                    </span>{" "}
                    |{" "}
                    {i.selected ? (
                      <div className="flex space-x-1 items-center">
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
        );
      })}
      </div>
    </>
  );
}
