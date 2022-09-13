import React from "react";
import style from "./style.module.css";

const Map = () => {
  return (
    <div className="section">
      <div className={style.map}>
        <div className={style.wrapper}>
          <picture>
            <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Map;
