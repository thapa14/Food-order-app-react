import React from "react";
import "./style.scss";
import CategoryItem from "./CategoryItem";

function index({ foodAppData }) {
  return (
    <div className="categories__section-wrapper w-100">
      {foodAppData.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default index;
