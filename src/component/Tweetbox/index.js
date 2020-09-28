import React, { useState } from "react";
import "./index.scss";
import { Button, Avatar } from "@material-ui/core";
import db from "../../firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      verified: true,
      username: "malek_smida",
      displayName: "Malek Smida",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: imageUrl,
      avatar:
        "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B",
    });
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="Malek Smida"
            src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
          />
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <input
            className="tweetBox__imageInput"
            placeholder="Enter image URL"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <Button type="submit" className="tweetBox__button" onClick={addTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
