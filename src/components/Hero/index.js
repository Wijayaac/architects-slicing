import React from "react";
import style from "./style.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.image}>
        <img
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt="hero"
        />
        <div className={style.text}>
          <h1>
            <span>BR</span> Architects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
