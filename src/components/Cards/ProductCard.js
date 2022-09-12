import React from "react";

const ProductCard = ({ img, label }) => {
  return (
    <div className="card-item">
      <div className="card-wrapper">
        <img src={img} alt="" className="card-img" />
        <span className="card-label">{label}</span>
      </div>
    </div>
  );
};

export default ProductCard;
