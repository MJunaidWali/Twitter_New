import React, { useState } from "react";
import axios from "axios";


const Tweet = () => {
  const [Comment, setTweetContent] = useState("");

  const handleChange = (event) => {
    setTweetContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`, {
        content: Comment
      }`);
      console.log("Tweet created successfully");
    } catch (error) {
      console.error("Error creating tweet:", error.message);
    }
  };

  return (
    <div className="main_wrapper">
    <div className="main_1">
      <h2>Create a new tweet</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={Comment}
          onChange={handleChange}
          placeholder="What's happening?"
          rows={4}
          cols={50}
          maxLength={280}
        />
        <br />
        <button type="submit">Post Comment</button>
      </form>
    </div>
    </div>
  );
};

export default Tweet;
