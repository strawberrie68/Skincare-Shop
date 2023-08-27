import { createSlice } from "@reduxjs/toolkit"

interface quizState {
  skintype: string,
  isSensitive: boolean,
  mainGoal: string,
  concerns: string[],
  tret: {
    want: boolean,
    tried: boolean,
    irritationLevel: number,
    pregnant: boolean,
  },
  acneLevel: string,
}

const initialState: quizState = {
  skintype: "",
  isSensitive: false,
  mainGoal: "",
  concerns: [],
  tret: {
    want: false,
    tried: false,
    irritationLevel: 0,
    pregnant: false,
  },
  acneLevel: "zero",

}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    skintype: (state, action) => { state.skintype = action.payload },
    isSensitive: (state, action) => { state.isSensitive = action.payload },
    mainGoal: (state, action) => { state.mainGoal = action.payload },
    allConcerns: (state, action) => { state.concerns = action.payload },
    wantTret: (state, action) => { state.tret.want = action.payload },
    triedTret: (state, action) => { state.tret.tried= action.payload },
    tretIrritation: (state, action) => { state.tret.irritationLevel = action.payload },
    pregnant: (state, action) => { state.tret.pregnant = action.payload },
    acneLevel: (state, action) => { state.acneLevel = action.payload },

  }
})

export const { } = quizSlice.actions

export default quizSlice.reducer