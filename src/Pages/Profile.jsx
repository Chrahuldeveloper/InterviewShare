import React from "react";
import { Navbar } from "../components";

export default function Profile() {
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

  const Blogs = [
    {
      tittle: "Lorem, ipsum dolor Lorem, ipsum dolor",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ex magni soluta! Ullam, distinctio? Itaque impedit ab sint culpa ad!",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      tittle: "Lorem, ipsum dolor Lorem, ipsum dolor",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ex magni soluta! Ullam, distinctio? Itaque impedit ab sint culpa ad!",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

    {
      tittle: "Lorem, ipsum dolor Lorem, ipsum dolor",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ex magni soluta! Ullam, distinctio? Itaque impedit ab sint culpa ad!",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="overflow-x-scroll">
      <Navbar profile={true} />
      <div
        className="w-[90vw] h-56 mx-auto mt-5 rounded-lg"
        style={{
          backgroundImage: `url('https://marketplace.canva.com/EAE2cQaUHVA/1/0/400w/canva-black-minimal-motivation-quote-linkedin-banner-6a_M22OYl6w.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="-translate-y-10">
        <img
          className="object-cover w-32 h-32 mx-auto duration-300 ease-in-out rounded-full hover:brightness-75"
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="mt-4 space-y-5 text-center">
          <h1 className="text-lg font-semibold text-slate-800">Rahul</h1>
          <p className="max-w-md mx-auto text-center text-slate-500">
            {
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in, laboriosam maxime similique impedit incidunt?"
            }
          </p>
          <button className="px-20 py-2 text-sm font-semibold text-white duration-500 ease-in-out bg-blue-500 rounded-lg">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="md:ml-28">
        <h1 className="text-lg font-semibold md:text-xl text-slate-800">
          Your Experiences
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-7">
          {data.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="max-w-md md:max-w-lg lg:max-w-xl p-5 border-[1px] border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold">
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
            );
          })}
        </div>
      </div>
      <div className="mt-10 ">
        <h1 className="text-lg font-semibold text-slate-800 md:ml-28 md:text-xl">
          Your Blogs
        </h1>
        <div className="grid grid-cols-3 gap-5 mx-auto my-6 md:max-w-7xl">
          {Blogs.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className="border-[1px] border-gray-200 p-5 max-w-md space-y-3 rounded-lg cursor-pointer">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="duration-300 ease-in rounded-lg hover:brightness-75"
                    />
                  </div>
                  <div className="space-y-3.5">
                    <h1 className="text-xl font-semibold underline text-slate-800">
                      {item.tittle}
                    </h1>
                    <p className="text-sm text-gray-500">{item.para}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
