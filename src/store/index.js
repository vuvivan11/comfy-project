import { configureStore } from "@reduxjs/toolkit";
import filtersSlide from "./filtersSlide";
import productListSlice from "./productListSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlide.reducer,
        productList: productListSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store