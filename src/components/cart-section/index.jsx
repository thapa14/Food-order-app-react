import React, { useEffect, useState } from "react";
import "./style.scss";

// icon import
import WeekendIcon from "@mui/icons-material/Weekend";
import HailIcon from "@mui/icons-material/Hail";
import LocalMallIcon from "@mui/icons-material/LocalMall";

// redux import
import { useSelector } from "react-redux";
import OrderSection from "./OrderSection";

function Cart() {
  // states
  const [pricing, setPricing] = useState({
    subTotal: 0,
    taxTotal: 0,
    totalAmount: 0,
  });

  const orderedItems = useSelector((store) => store.cart.orderedItems);
  const inSeatDeliveryItems = orderedItems.inSeatDelivery;
  const pickupAtCounterItems = orderedItems.pickupAtCounter;

  // function to calculate the subtotal amount of cart items
  const calculateSubTotal = () => {
    const inSeatDeliveryItemsSubTotal = inSeatDeliveryItems.reduce(
      (total, curr) => {
        return (total += curr.qty * curr.valuebeforetax);
      },
      0
    );
    const pickupAtCounterItemsSubTotal = pickupAtCounterItems.reduce(
      (total, curr) => {
        return (total += curr.qty * curr.valuebeforetax);
      },
      0
    );
    const subTotal = inSeatDeliveryItemsSubTotal + pickupAtCounterItemsSubTotal;
    return parseFloat(subTotal.toFixed(2));
  };

  // function to calculate the total tax of the cart items
  const calculateTotalTax = () => {
    const inSeatDeliveryItemsTax = inSeatDeliveryItems.reduce((total, curr) => {
      return (total += curr.qty * curr.taxValue);
    }, 0);
    const pickupAtCounterItemsTax = pickupAtCounterItems.reduce(
      (total, curr) => {
        return (total += curr.qty * curr.taxValue);
      },
      0
    );

    const totalTax = inSeatDeliveryItemsTax + pickupAtCounterItemsTax;
    return parseFloat(totalTax.toFixed(2));
  };

  useEffect(() => {
    let subTotalAmount = calculateSubTotal();
    let totalTaxAmount = calculateTotalTax();
    let grandTotalAmount = subTotalAmount + totalTaxAmount;

    setPricing({
      subTotal: subTotalAmount,
      taxTotal: totalTaxAmount,
      totalAmount: grandTotalAmount.toFixed(2),
    });
  }, [inSeatDeliveryItems, pickupAtCounterItems]);

  return inSeatDeliveryItems.length || pickupAtCounterItems.length ? (
    <div className="card cart-card shadow w-100   text-start">
      <h2 className="fs-4 mt-1 fw-bold">Order Summary</h2>
      <div className="order__summary pb-3">
        {pickupAtCounterItems.length ? (
          <OrderSection
            DeliveryIcon={HailIcon}
            atCounter={true}
            deliveryTypeData={pickupAtCounterItems}
            deliveryType="Picked-up by you"
          />
        ) : null}

        {inSeatDeliveryItems.length ? (
          <OrderSection
            DeliveryIcon={WeekendIcon}
            atCounter={false}
            deliveryTypeData={inSeatDeliveryItems}
            deliveryType="Delivered to your seat"
          />
        ) : null}
      </div>

      <div>
        <div className="line my-2"></div>

        <div className="total-div">
          <div className="sub-total d-flex justify-content-between align-items-center">
            <span className="cart-subtitle">sub total</span>
            <span className="cart-subtitle fw-bold">${pricing.subTotal}</span>
          </div>
          <div className="tax d-flex justify-content-between align-items-center ">
            <span className="cart-subtitle">tax</span>
            <span className="cart-subtitle fw-bold">${pricing.taxTotal}</span>
          </div>
        </div>

        <div className="line my-2"></div>

        <div className="grand-total d-flex justify-content-between align-items-center">
          <span className="grand-total-font">Total</span>
          <span className="grand-total-font fw-bold">
            ${pricing.totalAmount}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="card shadow w-100 p-5 d-flex flex-column justify-content-center align-items-center">
      <h2>Your Cart</h2>
      <LocalMallIcon style={{ fontSize: "60px", color: "gray" }} />
      <p className="mb-0 fs-4 p-3 text-secondary">
        Cart is empty select a category to add food
      </p>
    </div>
  );
}

export default Cart;
