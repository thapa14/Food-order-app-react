import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";
const initialValue = {
  foodAppData: [...data],
  modalData: {},
  orderedItems: {
    pickupAtCounter: [],
    inSeatDelivery: [],
  },
};

const cartSlice = createSlice({
  name: "foodApp",
  initialState: initialValue,
  reducers: {
    // to open modal modifier and set its data
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },

    addToCart: (state, action) => {
      // data object destructuring
      const { pickupAtCounter } = action.payload.item;

      if (pickupAtCounter) {
        const pickedItemData = {
          ...action.payload.item,
          qty: action.payload.quantity,
        };
        state.orderedItems.pickupAtCounter.push(pickedItemData);
      } else {
        const pickedItemData = {
          ...action.payload.item,
          qty: action.payload.quantity,
        };
        state.orderedItems.inSeatDelivery.push(pickedItemData);
      }
    },

    // increase item quantity
    incQuantity: (state, action) => {
      if (action.payload.pickupAtCounter) {
        const indexOfItem = state.orderedItems.pickupAtCounter.findIndex(
          (item) => item.id === action.payload.id
        );
        if (
          state.orderedItems.pickupAtCounter[indexOfItem].qty <
          state.orderedItems.pickupAtCounter[indexOfItem].maximumqty
        ) {
          state.orderedItems.pickupAtCounter[indexOfItem].qty += 1;
        }
      } else {
        const indexOfItem = state.orderedItems.inSeatDelivery.findIndex(
          (item) => item.id === action.payload.id
        );
        if (
          state.orderedItems.inSeatDelivery[indexOfItem].qty <
          state.orderedItems.inSeatDelivery[indexOfItem].maximumqty
        ) {
          state.orderedItems.inSeatDelivery[indexOfItem].qty += 1;
        }
      }
    },
    // decrease item quantity
    decQuantity: (state, action) => {
      if (action.payload.pickupAtCounter) {
        const indexOfItem = state.orderedItems.pickupAtCounter.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.orderedItems.pickupAtCounter[indexOfItem].qty > 1) {
          state.orderedItems.pickupAtCounter[indexOfItem].qty -= 1;
        }
      } else {
        const indexOfItem = state.orderedItems.inSeatDelivery.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.orderedItems.inSeatDelivery[indexOfItem].qty > 0) {
          state.orderedItems.inSeatDelivery[indexOfItem].qty -= 1;
        }
      }
    },

    deleteFromCart: (state, action) => {
      if (action.payload.pickupAtCounter) {
        const newPickupAtCounterData =
          state.orderedItems.pickupAtCounter.filter(
            (item) => item.id !== action.payload.id
          );

        state.orderedItems.pickupAtCounter = newPickupAtCounterData;
      } else {
        const newInSeatDeliveryData = state.orderedItems.inSeatDelivery.filter(
          (item) => item.id !== action.payload.id
        );

        state.orderedItems.inSeatDelivery = newInSeatDeliveryData;
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  setModalData,
  incQuantity,
  decQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
