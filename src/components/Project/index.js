import React from "react";
import ProductCard from "../Cards/ProductCard";
import style from "./style.module.css";

const houses = [
  {
    id: "1293081209",
    label: "Summer House",
    imgSource: "https://www.w3schools.com/w3images/house3.jpg",
  },
  {
    id: "1293810298",
    label: "Brick House",
    imgSource: "https://www.w3schools.com/w3images/house4.jpg",
  },
  {
    id: "129381021328",
    label: "Renovated House",
    imgSource: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    id: "1293321810298",
    label: "Brick House",
    imgSource: "https://www.w3schools.com/w3images/house2.jpg",
  },
  {
    id: "1293832110298",
    label: "Barn House",
    imgSource: "https://www.w3schools.com/w3images/house4.jpg",
  },
  {
    id: "1293831210298",
    label: "Brick House",
    imgSource: "https://www.w3schools.com/w3images/house3.jpg",
  },
  {
    id: "1293831210312298",
    label: "Brick House",
    imgSource: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    id: "121293831210298",
    label: "Brick House",
    imgSource: "https://www.w3schools.com/w3images/house2.jpg",
  },
];

const Project = () => {
  return (
    <div className="section">
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
