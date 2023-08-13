import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from "@/shared/types"



interface cartState {
    product: ProductType[],
    // total: number,
}

const initialState: cartState = {
    product: [],
    // total: 0,
}

  
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<ProductType>) => {
        state.product.push(action.payload) 
      }
    }
  })




export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
