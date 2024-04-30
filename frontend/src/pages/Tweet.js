import React, { useState } from "react";
import axios from "axios";

const Tweet = () => {
  const [tweetContent, setTweetContent] = useState("");

  const handleChange = (event) => {
    setTweetContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your backend API to create the tweet
      await axios.post("http://127.0.0.1:8000/tweets/", {
        content: tweetContent
      });
      console.log("Tweet created successfully");
      // Optionally, you can redirect the user to another page after successful tweet creation
    } catch (error) {
      console.error("Error creating tweet:", error.message);
    }
  };

  return (
    <div>
      <h2>Create a new tweet</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={tweetContent}
          onChange={handleChange}
          placeholder="What's happening?"
          rows={4}
          cols={50}
          maxLength={280} // Twitter's maximum tweet length
        />
        <br />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
};

export default Tweet;
