import React from "react";
import {
  Blogs,
  Home,
  Profile,
  ReadFullBlog,
  ReadFullExperience,
  SignUp,
  UploadExperience,
  WriteBlog,
} from "./Pages";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const jwt = localStorage.getItem("jwt");

  return (
    <Routes>
      {jwt ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/interview/:id" element={<ReadFullExperience />} />
          <Route path="/user/:userid" element={<Profile />} />
          <Route path="/blog/:blogid" element={<ReadFullBlog />} />
          <Route path="/upload/experience" element={<UploadExperience />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/write/blog" element={<WriteBlog />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
