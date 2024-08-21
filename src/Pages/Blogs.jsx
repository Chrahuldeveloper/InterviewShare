import React from "react";
import { Navbar } from "../components";

export default function Blogs() {
  const blogs = [
    {
      title: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere. Praesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue lacinia.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
    {
      title: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere. Praesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue lacinia.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
    {
      title: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere. Praesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue lacinia.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
    {
      title: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere. Praesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue lacinia.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
    {
      title: "Lorem, ipsum dolor Lorem, ipsum dolor",
      img: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      sections: [
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non tortor consequat, a efficitur purus posuere. Praesent dignissim nisi nec leo gravida, vitae.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Nulla facilisi. Ut fringilla quam id sapien faucibus, ac aliquet nisl iaculis. Etiam euismod felis id dui congue lacinia.",
        },
        {
          title: "Praesent dignissim nisi nec leo gravida, vitae",
          para: "Praesent dignissim nisi nec leo gravida, vitae consectetur est pellentesque. Cras suscipit lacus sit amet libero sollicitudin, id consequat ligula vehicula.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="px-10 py-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-200 p-5 max-w-lg space-y-3 rounded-lg cursor-pointer"
            >
              <div>
                <img
                  className="duration-300 ease-in rounded-lg hover:brightness-75"
                  src={blog.img}
                  alt={blog.title}
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold underline text-slate-800">
                  {blog.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
