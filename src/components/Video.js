import React from "react";
import Avatar from "@mui/material/Avatar";
import "./css/Video.css";

const Video = ({ video, title, channel, views, timestamp, image, channel_image }) => {
  return (
    <div className="video">
      <img className="video_thumbnail" src={image} alt="" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channel_image} sx={{ width: 26, height: 26 }} />
        <div className="video_text">
          <p className="title">{title}</p>
          <div className="channel">
            <p className="one">{channel}</p>
            <p className="two"> {views} * {timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
