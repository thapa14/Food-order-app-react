import React from "react";
import Optionals from "./Optionals";

function OptionalWrapper({ smartModifiers }) {
  return (
    <div className="optional mt-4">
      <div className="row">
        <h2 className="col-6 mb-0 modifier__title modifier__title-common">
          Optional
        </h2>
        <h2 className="col-3 mb-0 modifier__title text-center">Remove</h2>
        <h2 className="col-3 mb-0 modifier__title text-center">Add as Side</h2>
      </div>
      <div className="optional-items mt-2">
        {smartModifiers.map((item, index) => (
          <Optionals key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default OptionalWrapper;
