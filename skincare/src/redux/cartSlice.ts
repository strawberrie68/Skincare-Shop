import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from "@/shared/types"



interface cartState {
  products: ProductType[],

}

const initialState: cartState = {
  products: [],

}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action) => {
      const productNames = state.products.map(product => product.name);
      const index = productNames.indexOf(action.payload.name);
      state.products.splice(index, 1)
    },
    reset: () => initialState,

  }
})




export const { addToCart, reset, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
