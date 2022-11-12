import React from "react";
import "./css/Sidebarelm.css";

const Sidebarelement = ({ title, Icon }) => {
  return (
    <>
      <div className="Icon">{Icon}</div>
      {title}
    </>
  );
};

export default Sidebarelement;
