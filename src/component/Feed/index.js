import React, { useState, useEffect } from "react";
import TweetBox from "../Tweetbox";
import Post from "../Post";
import "./index.scss";
import db from "../../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id} //best practice: use doc id from firebase
            verified={post.verified}
            username={post.username}
            displayName={post.displayName}
            timestamp={post.timestamp}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
