import React, { forwardRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./index.scss";

const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__body__header">
            <div className="post__body__headerText">
              <h3>
                {displayName}
                <span className="post__body__headerSpecial">
                  {verified && (
                    <VerifiedUserIcon className="post__body__badge" />
                  )}
                  {username} {" - "}
                  {new Date(timestamp?.toDate()).toUTCString()}
                </span>
              </h3>
            </div>
            <div className="post__body__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
