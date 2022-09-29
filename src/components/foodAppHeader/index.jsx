import React from "react";
import "./style.scss";

function FoodAppHeader() {
  return (
    <header className="d-flex justify-content-center align-items-center">
      <div className="header-div d-flex align-items-center">
        <div className="non-member d-flex flex-column align-items-end">
          <p className="mb-0 text-capitalize">non-member</p>
          <p className="mb-0">pricing</p>
        </div>
        <div className="toggle-btn mx-3 d-flex align-items-center">
          <div></div>
        </div>
        <div className="extras-member d-flex flex-column ">
          <p className="m-0 text-capitalize">
            <span className="text-danger ">extras</span> member
            <span> i</span>
          </p>
          <p className="mb-0">pricing</p>
        </div>
      </div>
    </header>
  );
}

export default FoodAppHeader;
