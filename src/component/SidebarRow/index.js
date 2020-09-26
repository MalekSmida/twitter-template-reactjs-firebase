import { Avatar } from "@material-ui/core";
import React from "react";
import "./index.scss";
import AvatarIcon from "@material-ui/core/Avatar";

function SidebarRow({ Icon, title, profilePic }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon />}
      {profilePic && <AvatarIcon alt="user" src={profilePic} />}
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarRow;
