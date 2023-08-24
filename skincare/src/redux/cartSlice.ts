import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import { ProductType } from "@/shared/types"



interface cartState {
    product: ProductType[],
    total : Number
   
}

const initialState: cartState = {
    product: [],
    total: 0

  }


const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        addProduct(state, action: PayloadAction<ProductType[]>) {
            state.product= action.payload;
            },
        
        
    }})

export const { addProduct } = cartSlice.actions
export const userSelector = (state: RootState) => state.userReducer;
export default cartSlice.reducer
