import { createSlice } from "@reduxjs/toolkit";

export interface IProductCart {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
}

interface ICart {
  cartList: IProductCart[];
}

export const sliceCart = createSlice({
  name: "cart",
  initialState: { cartList: [] },
  reducers: {
    addToCart(state: ICart, action) {
      const itemInCart = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state: ICart, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      item && item.quantity++;
    },
    decrementQuantity: (state: ICart, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item && item.quantity--;
      }
    },
    removeItem: (state: ICart, action) => {
      const removeItem = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.cartList = removeItem;
    },
  },
});

export const { addToCart, removeItem, incrementQuantity, decrementQuantity } = sliceCart.actions;

export default sliceCart.reducer;
