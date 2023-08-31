import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import quizSlice from "./quizSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const store = configureStore({
    reducer: {
        cart: cartSlice,
        quiz: quizSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
