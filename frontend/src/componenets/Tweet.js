import React, { useState, useEffect } from "react";
import axios from "axios";

const Tweet = () => {
  const [comment, setTweetContent] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editTweetId, setEditTweetId] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyTweetId, setReplyTweetId] = useState(null);

  const handleChange = (event) => {
    setTweetContent(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditComment(event.target.value);
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/tweets/", {
        comment: comment,
      });
      console.log("Tweet created successfully");
      setTweetContent("");
      fetchTweets();  // Refresh the list of tweets after a new one is created
    } catch (error) {
      console.error("Error creating tweet:", error);
    }
  };

  const handleReplySubmit = async (event, tweetId) => {
    event.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:8000/replies/`, {
        comment: reply,
      });
      console.log("Reply created successfully");
      setReply("");
      setReplyTweetId(null);
      fetchTweets();  // Refresh the list of tweets after a new reply is created
    } catch (error) {
      console.error("Error creating reply:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/tweets/${id}/`);
      console.log("Tweet deleted successfully");
      fetchTweets();  // Refresh the list of tweets after one is deleted
    } catch (error) {
      console.error("Error deleting tweet:", error);
    }
  };

  const handleEdit = (tweet) => {
    setEditTweetId(tweet.id);
    setEditComment(tweet.comment);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/tweets/${editTweetId}/`, {
        comment: editComment,
      });
      console.log("Tweet updated successfully");
      setEditTweetId(null);
      setEditComment("");
      fetchTweets();  // Refresh the list of tweets after one is updated
    } catch (error) {
      console.error("Error updating tweet:", error);
    }
  };

  const fetchTweets = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/tweets/");
      setTweets(response.data);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="main_wrapper">
      <div className="main_1 _Tweetee">
        <h2>Create a new tweet</h2>
        <form className="forms" onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={handleChange}
            placeholder="What's happening?"
            rows={4}
            cols={50}
            maxLength={280}
          />
          <br />
          <button className="butn" type="submit">Post Your Tweet</button>
        </form>
        <h3>All Tweets</h3>
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              {editTweetId === tweet.id ? (
                <form onSubmit={handleUpdate}>
                  <textarea
                    value={editComment}
                    onChange={handleEditChange}
                    rows={2}
                    cols={50}
                    maxLength={280}
                  />
                  <br />
                  <button className="butn" type="submit">Update</button>
                  <button className="butn" type="button" onClick={() => setEditTweetId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  {tweet.comment}
                  <br />
                  <button className="butn" onClick={() => handleDelete(tweet.id)}>Delete</button>
                  <button className="butn" onClick={() => handleEdit(tweet)}>Edit</button>
                  <button className="butn" onClick={() => setReplyTweetId(tweet.id)}>Reply</button>
                  {replyTweetId === tweet.id && (
                    <form onSubmit={(event) => handleReplySubmit(event, tweet.id)}>
                      <textarea
                        value={reply}
                        onChange={handleReplyChange}
                        rows={2}
                        cols={50}
                        maxLength={280}
                      />
                      <br />
                      <button className="butn" type="submit">Post Reply</button>
                    </form>
                  )}
                  {tweet.replies && tweet.replies.length > 0 && (
                    <ul>
                      {tweet.replies.map((reply) => (
                        <li key={reply.id}>{reply.comment}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
