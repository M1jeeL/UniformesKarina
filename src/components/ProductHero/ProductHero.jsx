import React from "react";
import "./ProductHero.scss";

const ProductHero = ({ img }) => {
  return (
    <div className="product-container">
      <img className="img-product" src={img} alt="uniformes karina" />
    </div>
  );
};

export default ProductHero;
