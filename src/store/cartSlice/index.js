import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        showCart: false,
        cartItem: []
    },
    reducers: {
        displayCart: (state) => {
            state.showCart = true
        },
        hiddenCart: (state) => {
            state.showCart = false
        },
        addCartItem: (state, action) => {
            let listCart = [...state.cartItem];
            const index = state.cartItem.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                listCart[index].amount += 1;
            } else {
                listCart.push(action.payload)
            }
            state.cartItem = listCart
        },
        deleteCartItem: (state, action) => {
            const index = state.cartItem.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                state.cartItem.splice(index, 1)
            }
        },
        increaseItemQuantity: (state, action) => {
            const index = state.cartItem.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                state.cartItem[index].amount += 1
            }
        },
        decreaseItemQuantity: (state, action) => {
            const index = state.cartItem.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                if (state.cartItem[index].amount > 1) {
                    state.cartItem[index].amount -= 1;
                }else{
                    state.cartItem.splice(index, 1)
                }
            }
        }
    }
})

export default cartSlice