import React, { useState } from "react";
import axios from "axios";

export default function EditModel({ user }) {
  const [name, setName] = useState(user.name || "");
  const [bio, setBio] = useState(user.bio || "");
  const [ProfilePic, setProfilePic] = useState(user.profilePic || "");

  const handleSave = async () => {
    try {
      const response = await axios.put(`/api/user/${user.jwt}`, {
        name,
        bio,
        ProfilePic,
      });

      if (response.status === 200) {
        console.log("Profile updated successfully:", response.data.user);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-md">
      <div className="p-5 bg-white rounded-md lg:w-[30vw]">
        <div className="flex flex-col space-y-3">
          <label className="font-semibold text-slate-800">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col mt-3 space-y-3">
          <label className="font-semibold text-slate-800">Bio</label>
          <input
            type="text"
            placeholder="Your Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col mt-3 space-y-3">
          <label className="font-semibold text-slate-800">Pic URL</label>
          <input
            type="text"
            placeholder="Picture"
            value={ProfilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            className="border-[1px] border-gray-300 py-3 px-2 rounded-lg outline-none"
          />
        </div>
        <div className="mt-5">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white rounded-lg font-semibold w-full py-2.5"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
