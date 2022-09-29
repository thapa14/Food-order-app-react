import React from "react";

import HeaderSection from "../components/foodAppHeader";
import CategoriesLinkSection from "../components/categories-link-section";
import CategoriesSection from "../components/Categories-section";
import CartSection from "../components/cart-section";

// redux import

import { useSelector } from "react-redux";

function FoodAppHomepage() {
  const foodAppData = useSelector((store) => store.cart.foodAppData);

  return (
    <>
      <HeaderSection />

      {foodAppData.length ? (
        <div className="container homepage__body d-flex flex-column align-items-center">
          <CategoriesLinkSection data={foodAppData} />
          <div className="row w-100 gx-5">
            <div className="col-7">
              <CategoriesSection foodAppData={foodAppData} />
            </div>
            <div className="col-5">
              <CartSection />
            </div>
          </div>
        </div>
      ) : (
        <h2>loading....</h2>
      )}
    </>
  );
}

export default FoodAppHomepage;
