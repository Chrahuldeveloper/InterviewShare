import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components";
import axios from "axios";

export default function ReadFullBlog() {
  const location = useLocation();
  const { id, img, title, sections, comments } = location.state || {};

  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const jwt = "66c36c272ad08e112437da05";

  const handleCommentSubmit = async () => {
    if (!commentText) return;

    try {
      const response = await axios.post(
        `http://localhost:9000/blog/${jwt}/${id}/comment`,
        {
          comment: commentText,
        }
      );
      console.log(response.data);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleReplySubmit = async (commentId) => {
    if (!replyText) return;

    try {
      const response = await axios.post(
        `http://localhost:9000/blog/${jwt}/${id}/comment/${commentId}/reply`,
        {
          reply: replyText,
        }
      );
      console.log(response.data);
      setReplyText("");
      setSelectedCommentId(null);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl my-4 md:ml-52 bg-white border-[1px] border-gray-300 p-5">
        <div>
          <h2 className="text-lg font-semibold underline text-slate-800 md:text-xl">
            {title}
          </h2>
          <img
            src={img}
            alt={title}
            className="my-3.5 rounded-lg max-w-md w-full"
          />
          {sections?.map((section, secIndex) => (
            <div key={secIndex} className="mt-5 space-y-3">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="text-gray-500">{section.para}</p>
            </div>
          ))}
        </div>
        <div className="my-5 space-y-3">
          <div>
            <h1 className="text-lg font-semibold text-slate-800">Comments</h1>
          </div>
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="border-b-[1px] border-slate-300 outline-none w-full mb-2"
            placeholder="Write comment"
          />
          <div className="flex justify-end">
            <button
              onClick={handleCommentSubmit}
              className="font-semibold text-white bg-blue-500 rounded-full px-5 py-1.5 text-sm"
            >
              Comment
            </button>
          </div>

          {/* Display Comments */}
          {comments?.map((comment) => (
            <div key={comment._id} className="mt-4">
              <p
                className="text-lg text-gray-700 mt-2.5
              "
              >
                {comment.comment}
              </p>
              <p className="mt-1.5 text-gray-500">Replies</p>
              <p className="mt-1.5 text-sm text-slate-800">{comment.reply}</p>
              <button
                onClick={() => setSelectedCommentId(comment._id)}
                className="mt-1.5 text-sm font-semibold text-blue-600"
              >
                Reply
              </button>
              {selectedCommentId === comment._id && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="border-b-[1px] border-slate-300 outline-none w-full mb-2"
                    placeholder="Write reply"
                  />
                  <button
                    onClick={() => handleReplySubmit(comment._id)}
                    className="font-semibold text-white bg-blue-500 rounded-full px-5 py-1.5 text-sm"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
