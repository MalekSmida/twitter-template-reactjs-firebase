import React, { useState, useEffect } from "react";

// node modules
import FlipMove from "react-flip-move";

// local files
import { Tweetbox, Post } from "../../component";
import "./index.scss";
import db from "../../service/firebase";

/**
 * application feed
 */
function Feed() {
  const [posts, setPosts] = useState([]);

  // fetch data from firestore
  useEffect(() => {
    let getData = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      getData(); // Stop listening to changes
    };
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index} //best practice: use doc id from firebase
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
