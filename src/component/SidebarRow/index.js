import { Avatar } from "@material-ui/core";
import React from "react";
import "./index.scss";
import AvatarIcon from "@material-ui/core/Avatar";

function SidebarRow({ Icon, title, profilePic, selected }) {
  return (
    <div className={`sidebarRow ${selected && "sidebarRow--selected"}`}>
      {Icon && <Icon className="sidebarRow__icon" />}
      {profilePic && (
        <AvatarIcon
          className="sidebarRow__avatar"
          alt="user"
          src={profilePic}
        />
      )}
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarRow;
