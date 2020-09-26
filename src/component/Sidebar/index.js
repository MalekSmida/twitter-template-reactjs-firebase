import React from "react";
import "./index.scss";
import SidebarRow from "../SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExploreIcon from "@material-ui/icons/FullscreenExit";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneRounded";
import MessagesIcon from "@material-ui/icons/MailOutlineRounded";
import BookmarksIcon from "@material-ui/icons/BookmarkBorderRounded";
import ListsIcon from "@material-ui/icons/ListAlt";
import MoreIcon from "@material-ui/icons/MoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={TwitterIcon} />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Explore" />
      <SidebarRow Icon={NotificationsIcon} title="Notifications" />
      <SidebarRow Icon={MessagesIcon} title="Messages" />
      <SidebarRow Icon={BookmarksIcon} title="Bookmarks" />
      <SidebarRow Icon={ListsIcon} title="Lists" />
      <SidebarRow
        profilePic="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
        title="Profile"
      />
      <SidebarRow Icon={MoreIcon} title="More" />
      <button>Tweet</button>
    </div>
  );
}

export default Sidebar;
