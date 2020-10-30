import React from "react";

// node modules
import AvatarIcon from "@material-ui/core/Avatar";

// local files
import "./index.scss";

/**
 * SidebarRow present each row of the sidebar
 *
 * @param {Object} Icon => Material-ui icon
 * @param {String} title => title of the sidebarRow
 * @param {String} Icon
 * @param {Boolean} selected
 */
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
