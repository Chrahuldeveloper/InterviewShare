import React from "react";
import { Navbar } from "../components";

export default function ReadFullBlog() {
  const Blogs = [
    {
      tittle: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          tittle: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere.Praesent dignissim nisi nec leo gravida, vitaePraesent dignissim nisi nec leo gravida, vitae",
        },
        {
          tittle: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue laciniaPraesent dignissim nisi nec leo gravida, vitaePraesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          tittle: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-3xl my-4 md:ml-48">
        {Blogs.map((blog, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold underline text-slate-800 md:text-xl">
              {blog.tittle}
            </h2>
            <img
              src={blog.img}
              alt={blog.tittle}
              className="my-3.5 rounded-lg"
            />
            {blog.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold">{section.tittle}</h3>
                <p className="text-gray-500 ">{section.para}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
