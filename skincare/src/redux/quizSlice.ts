import { createSlice } from "@reduxjs/toolkit"

const quizSlice = createSlice ({
    name: "quiz",
    initialState:{
        skintype: "",
        isSensitive: true,
        concerns:[],
        tret: {
          want: false,
          tried: false,
          irritationLevel: 0,
          pregnant: false,
        },
        acneLevel: "none",
        
    },
    reducers:{
    
    }
})

export const {  } = quizSlice.actions

export default quizSlice.reducer