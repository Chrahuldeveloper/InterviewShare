import React from "react";
import { Home, ReadFullExperience, SignUp } from "./Pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/interview/:id" element={<ReadFullExperience />} />
    </Routes>
  );
}
