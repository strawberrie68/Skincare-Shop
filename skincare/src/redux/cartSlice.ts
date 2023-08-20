import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "cart",
    initialState:{
        product: [],
        quantity: 0,
        price: 0
        
    },
    reducers:{
    
    }
})

export const {  } = cartSlice.actions

export default cartSlice.reducer
