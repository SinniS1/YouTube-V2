import React from "react";
import "./css/Main.css";
import Tag from "./Tag";
import Video from "./Video";


const Main = () => {
  return (
    <>
      <div className="content">
        <div className="tag">
          <Tag selected title="All" />
          <Tag title="Papa_Ji" />
          <Tag title="Mummy_Ji" />
          <Tag title="Sachin" />
          <Tag title="Raj" />
          <Tag title="Gaurav" />
          <Tag title="School" />
          <Tag title="College" />
          <Tag title="Eleventh" />
          <Tag title="Home_Town" />
          <Tag title="Live" />
          <Tag title="Party" />
          <Tag title="Dance" />
          <Tag title="Laptop" />
          <Tag title="Music" />
          <Tag title="School_Friends" />
          <Tag title="New_for_You" />
        </div>

        <div className="main">

          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </>
  );
};

export default Main;
