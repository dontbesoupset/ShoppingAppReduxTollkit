import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: true,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
            state.totalQuantity++;
        },
        removefromCart(state, action) {
            const id = action.payload;

            const existingItem = state.itemsList.find(item => item.id === item.id)

            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;