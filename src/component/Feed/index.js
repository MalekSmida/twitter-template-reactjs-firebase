import React from "react";
import Header from "../Header";
import TweetBox from "../Tweetbox";
import Post from "../Post";

function Feed() {
  return (
    <div className="feed">
      <Header />
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
