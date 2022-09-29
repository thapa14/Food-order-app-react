import React from "react";

function Optionals({ item }) {
  const { itemName, id } = item;
  return (
    <div className="row">
      <span className="col-6 modifier__item-name">{itemName}</span>
      <div className="col-3 checkbox  d-flex align-items-center justify-content-center">
        <input type="radio" name={id} id="" />
      </div>
      <div className="col-3 checkbox d-flex align-items-center justify-content-center">
        <input type="radio" name={id} id="" />
      </div>
    </div>
  );
}

export default Optionals;
