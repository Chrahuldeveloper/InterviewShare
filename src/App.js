import React from "react";
import {
  Home,
  Profile,
  ReadFullBlog,
  ReadFullExperience,
  SignUp,
  UploadExperience,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/interview/:id" element={<ReadFullExperience />} />
      <Route path="/user/:userid" element={<Profile />} />
      <Route path="/blog/:blogid" element={<ReadFullBlog />} />
      <Route path="/upload/experience" element={<UploadExperience />} />
    </Routes>
  );
}
