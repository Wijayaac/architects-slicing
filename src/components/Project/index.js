import React from "react";
import ProductCard from "../Cards/ProductCard";
import style from "./style.module.css";

const Project = (props) => {
  const { houses } = props;
  return (
    <div className="section" id="project">
      <h2 className="section-title">Projects</h2>
      <div className={style.grid}>
        {houses.map(({ id, label, imgSource }) => (
          <ProductCard key={id} label={label} img={imgSource} />
        ))}
      </div>
    </div>
  );
};

export default Project;
