import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./index.scss";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Trends for you</h2>
        <TwitterTweetEmbed tweetId={"1050118621198921728"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Twitter"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/malek.smida.54540/"}
          options={{ text: "#reactjs is awesome", via: "maleksmida" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
