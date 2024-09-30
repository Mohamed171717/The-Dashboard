import React from "react";
import '../CSS/EcommerceMaster.css';
import "@fortawesome/fontawesome-svg-core";

export default function BreadCrumb(props) {
  const { product } = props;
  return (
    <>
      <div className="bread-crumb">
        Home <i className="fa-solid fa-chevron-right"></i>
        Shop <i className="fa-solid fa-chevron-right"></i>
        {product.category} <i className="fa-solid fa-chevron-right"></i>
        {product.name}
      </div>
    </>
  );
}
