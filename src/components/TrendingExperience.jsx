import React, { useEffect, useState } from "react";
import axios from "axios";
import Empty from "./Empty";

export default function TrendingExperience() {
  const [data, setData] = useState([
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
    {
      company: "Amazon",
      companyPic:
        "https://files.codingninjas.in/company-short-logo-url/2/731aacbd5ef5e7c6d6195f96525fdc79.png",
      position: "SDE-1",
      experience: "Fresher",
      date: "Jan 2024",
      Name: "Rahul",
      selected: true,
      Level: "1",
      rounds: "5",
      CGPA: "8",
      NumberofProblems: "5",
      ProfilePic: "https://files.codingninjas.com/gen-assets/AN/8.png",
      interviewPlace: "On Campus",
      college: "CMRCET",
    },
  ]);

  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSalary, setSelectedSalary] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const itemsPerPage = 7;

  const salaryRanges = [
    "All",
    "2 LPA to 5 LPA",
    "5 LPA to 8 LPA",
    "8 LPA to 12 LPA",
    "12 LPA to 20 LPA",
    "20 LPA and above",
  ];

  const locations = [
    "All",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Gurgaon",
    "Noida",
    "Ahmedabad",
  ];

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

  useEffect(() => {
    const filterData = () => {
      let filtered = [...data];

      if (selectedSalary !== "All") {
        filtered = filtered.filter((item) => item.salary === selectedSalary);
      }

      if (selectedLocation !== "All") {
        filtered = filtered.filter(
          (item) => item.location === selectedLocation
        );
      }

      setFilteredData(filtered);
    };
    filterData();
  }, [data, selectedSalary, selectedLocation]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredData.length / itemsPerPage))
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSalaryChange = (e) => {
    setSelectedSalary(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    setCurrentPage(1);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={` ${
        filteredData.length > 0 ? " md:mt-16" : "md:mt-14"
      } md:ml-16 md:max-w-3xl`}
    >
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

      <div className="flex items-center justify-center max-w-md gap-5 mx-auto mt-10 lg:max-w-lg">
        <div className="border-[1px] border-gray-200 rounded-lg py-2 w-full text-center">
          <select
            className="px-12 outline-none"
            value={selectedSalary}
            onChange={handleSalaryChange}
          >
            {salaryRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="border-[1px] border-gray-200 rounded-lg py-2 w-full text-center">
          <select
            className="px-12 outline-none"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 my-6 md:justify-start md:items-start md:ml-28">
        {paginatedData.length > 0 ? (
          paginatedData.map((i, idx) => (
            <div
              key={idx}
              className="max-w-md md:max-w-lg lg:max-w-xl p-5 border-[1px] border-gray-300 rounded-lg"
            >
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
                  <ul className="flex items-center gap-x-2 gap-y-1.5 mt-2 flex-wrap text-sm text-gray-600">
                    <li>{i.interviewPlace}</li>|<li>{i.college}</li>|
                    <li>CGPA {i.CGPA}</li>|<li>{i.rounds} rounds</li>|
                    <li>{i.NumberofProblems} problems</li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="lg:ml-56">
            <Empty />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-5 items my-7">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-2 py-1 text-white bg-black rounded-lg disabled:bg-stone-600"
        >
          Prev
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4  py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-stone-600 text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-white bg-black rounded-lg disabled:bg-stone-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
