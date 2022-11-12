import React from "react";
import "./css/Header.css";

// Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_start">
        <MenuOutlinedIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          alt="Youtube"
        />
        <span>YouTube</span>
      </div>

      <div className="header_middle">
        <div className="header_input">
          <input className="header_search" type="text" placeholder="Search" />
          <SearchOutlinedIcon className="header_search_icon" fontSize="medium" />
        </div>
        <MicOutlinedIcon className="header_mike" fontSize="large" />
      </div>

      <div className="header_end">
        < VideoCallOutlinedIcon fontSize="medium" />
        <NotificationsNoneOutlinedIcon fontSize="medium" />
        <Avatar
          className="avatar"
          alt="Sachin"
          src="https://avatars.githubusercontent.com/u/76551668?s=400&u=758aff5a0554251b57c1651b39797d5d21fd12a2&v=4"
          sx={{ width: 26, height: 26 }}
        />
      </div>
    </div>
  );
};

export default Header;
