import React, { useState } from "react";
import axios from "axios";

const Comments = ({ tweetId }) => {
  const [commentContent, setCommentContent] = useState("");

  const handleChange = (event) => {
    setCommentContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your backend API to create the comment
      await axios.post(`http://127.0.0.1:8000/tweets/${tweetId}/comments/`, {
        content: commentContent
      });
      console.log("Comment created successfully");
      // Optionally, you can reload the tweet or show the new comment immediately
    } catch (error) {
      console.error("Error creating comment:", error.message);
    }
  };

  return (
    <div>
      <h3>Leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentContent}
          onChange={handleChange}
          placeholder="Write your comment here..."
          rows={4}
          cols={50}
          maxLength={280} // Maximum comment length (adjust as needed)
        />
        <br />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default Comments;
