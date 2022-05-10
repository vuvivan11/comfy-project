import { createSlice } from "@reduxjs/toolkit";

const filtersSlide = createSlice({
    name: 'filters',
    initialState: {
        search: "",
        company: "all",
        price: 80
    },
    reducers: {
        companyFilter: (state, actions) => {
            state.company = actions.payload
        },
        searchFilter: (state, actions) => {
            state.search = actions.payload
        },
        priceFilter: (state, actions) => {
            state.price = actions.payload
        }
    }
})

export default filtersSlide