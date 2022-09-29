import React, { useState } from "react";
import "./style.scss";
// redux import
import { useDispatch } from "react-redux";
import { setModalData, addToCart } from "../../redux/cartSlice";

// icons
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Header from "./Header";
import Modifiers from "./Modifiers";
import OptionalWrapper from "./OptionalWrapper";

function ModifiersModal({ data }) {
  const [modifiersQty, setModifiersQty] = useState(1);
  const [selectedModifierItems, setSelectedModierItems] = useState({
    modifiersNames: [],
    modifiersSubTotal: 0,
    modifiersTotalTax: 0,
  });
  const dispatch = useDispatch();

  // modifiers modal data object destructuring
  const {
    id,
    amount,
    itemName,
    itemDetails,
    valuebeforetax,
    taxValue,
    maximumqty,
    pickupAtCounter,
    inSeatDelivery,
    modifierGroups,
    smartModifiers,
    fnbs_images: [{ imageurl }],
  } = data;

  // header data
  const headerData = [itemName, itemDetails, valuebeforetax, imageurl];

  // initial item data of the modal to be added to the cart

  const addToCartModalItemData = {
    item: {
      id: id,
      itemName: itemName,
      valuebeforetax: parseFloat(
        (valuebeforetax + selectedModifierItems.modifiersSubTotal).toFixed(2)
      ),
      amount: amount,
      taxValue: parseFloat(
        (taxValue + selectedModifierItems.modifiersTotalTax).toFixed(2)
      ),
      maximumqty: maximumqty,
      pickupAtCounter: pickupAtCounter,
      inSeatDelivery: inSeatDelivery,
      modifierNames: selectedModifierItems.modifiersNames,
    },
    quantity: modifiersQty,
  };

  // to increase quantity
  const incQuantity = () => {
    if (addToCartModalItemData.quantity < maximumqty)
      setModifiersQty(modifiersQty + 1);
  };

  // to decrease quantity
  const decQuantity = () => {
    if (addToCartModalItemData.quantity > 1) setModifiersQty(modifiersQty - 1);
  };

  // this is the total of item and its modifiers price tax excluded
  const addedItemsTotal =
    addToCartModalItemData.quantity *
    addToCartModalItemData.item.valuebeforetax;

  // function to close the modal and reset its data
  const closeModal = () => {
    dispatch(setModalData({}));
  };

  // function to add items to cart
  const handleAddToCartClick = () => {
    dispatch(addToCart(addToCartModalItemData));
    closeModal();
  };

  return (
    <div className="modifiers__modal-wrapper ">
      <div className="modifier__modal">
        <div className="item__addons">
          <Header headerData={headerData} />
          <div className="line"></div>
          <div className="modal__body ">
            <div className="modifiers__section">
              {modifierGroups.map((modifiers, index) => {
                return (
                  <Modifiers
                    key={index}
                    modifiers={modifiers}
                    setSelectedModierItems={setSelectedModierItems}
                  />
                );
              })}
            </div>
            <OptionalWrapper smartModifiers={smartModifiers} />
          </div>
          <div className="instruction-section mt-2 p-5">
            <h2 className="modifier__title-common text-capitalize">
              special instruction
            </h2>
            <textarea placeholder="Enter your instructions here"></textarea>
          </div>
        </div>
        <div className="item__checkout-div ">
          <div className="item__quantity d-flex flex-row justify-content-between align-items-center px-5">
            <h2 className="modifier__title-common mb-0">Quantity</h2>
            <div className="quantity__select d-flex align-items-center">
              <RemoveCircleOutlineIcon
                className="modifier__icon"
                onClick={decQuantity}
              />
              <span className="mx-3 ">{addToCartModalItemData.quantity}</span>
              <AddCircleOutlineIcon
                className="modifier__icon"
                onClick={incQuantity}
              />
            </div>
          </div>
          <div
            className="add-to-cart text-center px-5 "
            onClick={handleAddToCartClick}
          >
            <span>Add to cart ${addedItemsTotal}</span>
          </div>
        </div>
        <HighlightOffIcon className="modal__close-icon" onClick={closeModal} />
      </div>
    </div>
  );
}

export default ModifiersModal;
