import React from "react";
import "./css/Sidebar.css";
import Sidebarelement from "./Sidebarelement";

// ICONS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WatchLater from '@mui/icons-material/AccessTime';
import Like from '@mui/icons-material/ThumbUpOffAltOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Report from '@mui/icons-material/OutlinedFlag';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import Feedback from '@mui/icons-material/AnnouncementOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="element">
        <Sidebarelement Icon={<HomeOutlinedIcon fontSize="small" />} title="Home" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<WhatshotIcon fontSize="small" />} title="Trending" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<SubscriptionsOutlinedIcon fontSize="small" />} title="Subscriptions" />
      </div>

      <div className="sidebar_line"></div>

      <div className="element">
        <Sidebarelement Icon={<VideoLibraryOutlinedIcon fontSize="small" />} title="Library" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<RestoreOutlinedIcon fontSize="small" />} title="History" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<SlideshowOutlinedIcon fontSize="small" />} title="Your Videos" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<WatchLater fontSize="small" />} title="Watch Later" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<Like fontSize="small" />} title="Liked Videos" />
      </div>
      <div className="sidebar_line"></div>
      <div className="element">
        <Sidebarelement Icon={<Settings fontSize="small" />} title="Settings" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<Report fontSize="small" />} title="Report History" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<Help fontSize="small" />} title="Help" />
      </div>
      <div className="element">
        <Sidebarelement Icon={<Feedback fontSize="small" />} title="Feedback" />
      </div>

    </div>
  );
};

export default Sidebar;
