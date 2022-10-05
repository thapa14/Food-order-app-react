import React from "react";

// icon import
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

// redux import
import { useDispatch } from "react-redux";
import {
  incQuantity,
  decQuantity,
  deleteFromCart,
} from "../../redux/cartSlice";

function OrderSection({
  deliveryTypeData,
  deliveryType,
  atCounter,
  DeliveryIcon,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex align-items-center">
        <DeliveryIcon style={{ fontSize: "20px", color: "darkred" }} />
        <p className="mt-2 mb-3 ms-1 delivery__heading">
          <span className="border-bottom border-danger border-2">
            {deliveryType}
          </span>
        </p>
      </div>

      {deliveryTypeData.map(
        (
          { id, itemName, valuebeforetax, qty, pickupAtCounter, modifierNames },
          index
        ) => {
          return (
            <div key={index}>
              <div className="row w-100 d-flex align-items-center mt-3">
                <div className="col-6">
                  <h4 className="cartItem__name">{itemName}</h4>
                  <p className="mb-0 cartItem__modifiers">
                    <span>{modifierNames.toString()}</span>
                  </p>
                </div>
                <div className="col-3">
                  <RemoveCircleOutlineIcon
                    className="modifier__icon cart-modifier__icon"
                    // to decrease quantity inline function function

                    onClick={() =>
                      dispatch(
                        decQuantity({
                          id: id,
                          pickupAtCounter: pickupAtCounter,
                        })
                      )
                    }
                  />
                  <span className="mx-3 fs-5 fw-bold">{qty}</span>
                  <AddCircleOutlineIcon
                    className="modifier__icon cart-modifier__icon"
                    // to increase quantity inline function

                    onClick={() =>
                      dispatch(
                        incQuantity({
                          id: id,
                          pickupAtCounter: pickupAtCounter,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-3 d-flex justify-content-end align-items-center">
                  <span className="fs-6 fw-bold">
                    ${(valuebeforetax * qty).toFixed(2)}
                  </span>
                  <CancelIcon
                    className="ms-2 text-secondary"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch(
                        deleteFromCart({
                          id: id,
                          pickupAtCounter: pickupAtCounter,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}

export default OrderSection;
