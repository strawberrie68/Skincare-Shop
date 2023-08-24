import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
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



// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addProduct: (state, action: PayloadAction<{products: ProductType[]}>) => {
//             state.product.push({
//                 img: action.payload.products.img,
//                 name:action.payload.name,
//                 price: action.payload.price,
//                 category: action.payload.category
//             }),
//             // state.total += action.payload.price
//         }

//     }
// })

export const { addToCart } = cartSlice.actions
// export const userSelector = (state: RootState) => state.userReducer;
export default cartSlice.reducer
