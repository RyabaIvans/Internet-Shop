import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string[] | string;
  size: string[] | number;
  countItems: number;
  param?: string;
};

export type SliceType = {
  totalPrice: number;
  items: ItemType[];
  totalCount: number;
};

const initialState: SliceType = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<ItemType>) {
      state.items.push(action.payload);

      state.totalCount = state.totalCount + 1;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.countItems + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<any>) {
      //      state.items = state.items.filter((f) => f.param !== action.payload);
      state.items = state.items.filter((f) => f.param !== action.payload.param);
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.count;
      state.totalCount = state.totalCount - action.payload.count;
    },
    clearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    increment(state, action: PayloadAction<ItemType>) {
      state.items.map((el) =>
        el.id === action.payload.id &&
        el.size === action.payload.size &&
        el.type === action.payload.type
          ? (el.countItems = el.countItems + 1)
          : el
      );

      state.totalCount = state.totalCount + 1;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.countItems + sum;
      }, 0);
    },
    decrement(state, action: PayloadAction<ItemType>) {
      state.items.map((el) =>
        el.id === action.payload.id &&
        el.size === action.payload.size &&
        el.type === action.payload.type
          ? el.countItems === 1
            ? 1
            : (el.countItems = el.countItems - 1)
          : el
      );
      state.totalCount = state.totalCount - 1;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.countItems + sum;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement, increment, addItems, removeItem, clearItems } =
  cartSlice.actions;

export const cartSelectorPrice = (state: RootState) =>
  state.cartSlice.totalPrice;
export const cartSelectorCount = (state: RootState) =>
  state.cartSlice.totalCount;
export const cartSelectorItem = (state: RootState) => state.cartSlice.items;
export default cartSlice.reducer;
