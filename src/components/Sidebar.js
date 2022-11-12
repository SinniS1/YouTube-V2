import React from "react";
import "./css/Sidebar.css";
import Sidebarelement from "./Sidebarelement";

// ICONS
import Home from "@mui/icons-material/HomeOutlined";
import Subscription from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibrary from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import Trending from "@mui/icons-material/Whatshot";
import WatchLater from "@mui/icons-material/AccessTime";
import Like from "@mui/icons-material/ThumbUpOffAltOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import Report from "@mui/icons-material/OutlinedFlag";
import Help from "@mui/icons-material/HelpOutlineOutlined";
import Feedback from "@mui/icons-material/AnnouncementOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="Link" to="/">
        <Sidebarelement selected Icon={Home} title="Home" />
      </Link>
      <Sidebarelement Icon={Trending} title="Trending" />
      <Sidebarelement Icon={Subscription} title="Subscription" />
      <div className="line"></div>
      <Sidebarelement Icon={VideoLibrary} title="Library" />
      <Sidebarelement Icon={RestoreOutlinedIcon} title="History" />
      <Sidebarelement Icon={SlideshowOutlinedIcon} title="Your Videos" />
      <div className="line"></div>
      <Sidebarelement Icon={WatchLater} title="Watch Later" />
      <Sidebarelement Icon={Like} title="Liked Videos" />
      <div className="line"></div>
      <Sidebarelement Icon={Settings} title="Settings" />
      <Sidebarelement Icon={Report} title="Report" />
      <Sidebarelement Icon={Help} title="Help" />
      <Sidebarelement Icon={Feedback} title="Feedback" />
    </div>
  );
};

export default Sidebar;
