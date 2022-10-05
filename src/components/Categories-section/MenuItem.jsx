import React from "react";
import { setModalData, addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ModifiersModal from "../modifiersModal";

// icon import
import WeekendIcon from "@mui/icons-material/Weekend";
import HailIcon from "@mui/icons-material/Hail";

function MenuItem({ menuItemData }) {
  const dispatch = useDispatch();
  const reduxStateData = useSelector((store) => store.cart);
  const modalData = reduxStateData.modalData;

  const {
    id,
    amount,
    itemName,
    itemDetails,
    modifierGroups,
    smartModifiers,
    valuebeforetax,
    taxValue,
    maximumqty,
    pickupAtCounter,
    inSeatDelivery,
    fnbs_images: [{ imageurl }],
  } = menuItemData;

  const addToCartBtnHandler = () => {
    if (modifierGroups.length && smartModifiers.length) {
      dispatch(setModalData(menuItemData));
      document.body.classList.add("scroll-lock");
    } else {
      dispatch(
        addToCart({
          item: {
            id: id,
            itemName: itemName,
            valuebeforetax: valuebeforetax,
            amount: amount,
            taxValue: taxValue,
            maximumqty: maximumqty,
            pickupAtCounter: pickupAtCounter,
            inSeatDelivery: inSeatDelivery,
            modifierNames: [],
          },
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className="menu__item p-3 border-bottom">
      <div className="row">
        <img className="item-left col-3 " src={imageurl} alt="img" />
        <div className="item-right col-9 d-flex flex-column justify-content-between">
          <div className="item-about">
            <h2>{itemName}</h2>
            <p>{itemDetails}</p>
          </div>
          <div className="item-pricing d-flex justify-content-between align-items-end">
            <span className="item-price">${amount}</span>
            <div className="add-item d-flex flex-column align-items-end">
              <div className="d-flex align-items-center gap-2">
                {pickupAtCounter ? (
                  <HailIcon className="delivery-icon" />
                ) : (
                  <WeekendIcon className="delivery-icon" />
                )}

                <button onClick={addToCartBtnHandler}>add+</button>
              </div>
              <span className="fs-6 fw-bold">
                {pickupAtCounter ? "Pick-up at counter" : "Delivery in-seat"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {(modalData.modifierGroups?.length ||
        modalData.smartModifiers?.length) && (
        <ModifiersModal data={modalData} />
      )}
    </div>
  );
}

export default MenuItem;
