import React from "react";

function Header({ headerData }) {
  const [itemName, itemDetails, valuebeforetax, imageurl] = headerData;
  return (
    <>
      <div className="modal__header">
        <img className="modal__img" src={imageurl} alt="img" />
        <div className="modal__body-head d-flex justify-content-between p-4 pb-2">
          <h2 className="modal__title">{itemName}</h2>
          <h2 className="modal__price">${valuebeforetax}</h2>
        </div>
        <p className="modal__details px-4 ">{itemDetails}</p>
      </div>
    </>
  );
}

export default Header;
