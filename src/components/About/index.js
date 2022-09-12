import React from "react";
import TeamCard from "../Cards/TeamCard";
import style from "./style.module.css";
const teams = [
  {
    id: "312312",
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    imgSource: "https://www.w3schools.com/w3images/team1.jpg",
  },
  {
    id: "331212312",
    name: "Jane Doe",
    role: "Architect",
    bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    imgSource: "https://www.w3schools.com/w3images/team2.jpg",
  },
  {
    id: "3123534212",
    name: "Mike Ross",
    role: "Architect",
    bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    imgSource: "https://www.w3schools.com/w3images/team3.jpg",
  },
  {
    id: "31231263",
    name: "Dan Star",
    role: "Interior",
    bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    imgSource: "https://www.w3schools.com/w3images/team4.jpg",
  },
];
const About = () => {
  return (
    <div className="section">
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
