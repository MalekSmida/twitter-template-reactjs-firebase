import React from "react";
import "./index.scss";
import { Button, Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="Malek Smida"
            src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
          />
          <input placeholder="What's happening?" type="text" />
          <input
            className="tweetBox__imageInput"
            placeholder="Enter image URL"
            type="text"
          />
        </div>
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
