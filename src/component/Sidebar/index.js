import React from "react";

// node modules
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExploreIcon from "@material-ui/icons/FullscreenExit";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneRounded";
import MessagesIcon from "@material-ui/icons/MailOutlineRounded";
import BookmarksIcon from "@material-ui/icons/BookmarkBorderRounded";
import ListsIcon from "@material-ui/icons/ListAlt";
import MoreIcon from "@material-ui/icons/MoreOutlined";
import Button from "@material-ui/core/Button";

// local files
import SidebarRow from "../SidebarRow";
import "./index.scss";

/**
 * Sidebar component that displays menu icons
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__logo" />
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={NotificationsIcon} title="Notifications" />
      <SidebarRow Icon={MessagesIcon} title="Messages" />
      <SidebarRow Icon={BookmarksIcon} title="Bookmarks" />
      <SidebarRow Icon={ListsIcon} title="Lists" />
      <SidebarRow
        profilePic="https://i.ibb.co/sH5B3n0/VAPORGRAM1589311597915.jpg"
        title="Profile"
      />
      <SidebarRow Icon={MoreIcon} title="More" />
      <Button className="sidebar__button">Tweet</Button>
    </div>
  );
}

export default Sidebar;
