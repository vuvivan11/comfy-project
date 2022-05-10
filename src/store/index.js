import { configureStore } from "@reduxjs/toolkit";
import filtersSlide from "./filtersSlide";
import productListSlice from "./productListSlice";
import cartSlice from "./cartSlice";
import activeSlice from "./activeSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlide.reducer,
        productList: productListSlice.reducer,
        cart: cartSlice.reducer,
        active: activeSlice.reducer,
    }
})

export default store