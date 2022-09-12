import React from "react";

const TeamCard = ({ name, role, bio, img }) => {
  return (
    <div className="card-item">
      <div className="card-wrapper">
        <img src={img} alt={name} />
      </div>
      <h3 className="card-name">{name}</h3>
      <p className="card-muted">{role}</p>
      <p className="card-copy">{bio}</p>
      <button className="card-cta">Contact</button>
    </div>
  );
};

export default TeamCard;
