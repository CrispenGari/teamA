import React from "react";
import Map from "../Map/Map";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main__left"></div>
      <div className="main__center">
        <Map />
      </div>

      <div className="main__right"></div>
    </div>
  );
};

export default Main;
