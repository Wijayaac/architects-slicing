import React from "react";

import TeamCard from "../Cards/TeamCard";

import style from "./style.module.css";

const About = (props) => {
  const { teams } = props;
  return (
    <div className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className={style.about}>
        <p className={style.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className={style.grid}>
          {teams.map(({ id, name, role, bio, imgSource }) => {
            return (
              <TeamCard
                key={id}
                name={name}
                role={role}
                bio={bio}
                img={imgSource}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
