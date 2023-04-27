import {configureStore} from '@reduxjs/toolkit'
import filter from "./slice/filterSlice";
import cart from "./slice/cartSlice";
import product from "./slice/productSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        filterSlice: filter,
        cartSlice: cart,
        productSlice: product
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
