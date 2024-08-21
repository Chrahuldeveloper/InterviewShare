import React, { useState } from "react";
import { Navbar } from "../components";
import { IoIosAdd } from "react-icons/io";

export default function WriteBlog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [sections, setSections] = useState([{ title: "", para: "" }]);

  const handleSectionChange = (index, e) => {
    const newSections = [...sections];
    newSections[index][e.target.name] = e.target.value;
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { title: "", para: "" }]);
  };

  const handleSubmit = () => {
    const blogData = {
      title,
      img,
      sections,
    };

    console.log(blogData);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-8 my-5 md:mx-auto">
        <div>
          <h1 className="text-lg font-semibold text-slate-800">Write a Blog</h1>
          <input
            type="text"
            placeholder="Title"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none w-full mt-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none w-full mt-5"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />

          <div className="mt-5">
            <h2 className="text-lg font-semibold text-slate-800">Sections</h2>
            {sections.map((section, index) => (
              <div key={index} className="mt-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Section Title"
                  className="border-[1px] border-gray-300 py-2 px-2 rounded-lg outline-none w-full mt-2"
                  value={section.title}
                  onChange={(e) => handleSectionChange(index, e)}
                />
                <textarea
                  name="para"
                  placeholder="Section Paragraph"
                  className="border-[1px] border-gray-300 py-2 px-2 rounded-lg outline-none w-full mt-2"
                  rows="4"
                  value={section.para}
                  onChange={(e) => handleSectionChange(index, e)}
                ></textarea>
              </div>
            ))}
            <button
              className="px-3 py-2 mt-3 text-white bg-blue-600 rounded-lg"
              onClick={handleAddSection}
            >
              <IoIosAdd size={26} />
            </button>
          </div>
          <button
            className="w-full px-6 py-3 mt-5 text-white bg-blue-600 rounded-lg"
            onClick={handleSubmit}
          >
            Submit Blog
          </button>
        </div>
      </div>
    </>
  );
}
