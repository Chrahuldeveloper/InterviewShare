import React from "react";
import { Home, Profile, ReadFullExperience, SignUp } from "./Pages";
import { Route, Routes } from "react-router-dom";
import "./App.css"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/interview/:id" element={<ReadFullExperience />} />
      <Route path="/user/:userid" element={<Profile />} />
    </Routes>
);
}
