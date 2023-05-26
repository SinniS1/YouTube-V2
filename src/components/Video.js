import React from "react";
import "./css/Video.css";
import Skeleton from 'react-loading-skeleton';


const Video = ({ video, title, channel, views, timestamp, image, channel_image }) => {
  return (
    <div className="youtube-skeleton">
      <div className="thumbnail">
        <Skeleton />
      </div>
      <div className="details">
        <div className="title">
          <Skeleton />
        </div>
        <div className="channel">
          <Skeleton />
        </div>
        <div className="channel">
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

export default Video;
