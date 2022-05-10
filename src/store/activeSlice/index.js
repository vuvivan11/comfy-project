import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "active",
    initialState: {
        showNav: false
    },
    reducers: {
        displayNav: (state) => {
            state.showNav = true
        },
        hiddenNav: (state) => {
            state.showNav = false
        },
    }
})

export default activeSlice