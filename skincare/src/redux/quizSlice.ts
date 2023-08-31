import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface FormStep1 {
  skintype: string;
}

export interface FormStep2 {
  isSensitive: boolean,
}

export interface FormStep3 {
  mainGoal: string,
}

export interface FormStep4 {
  concerns: string[],
}

export interface FormStep5 {
  tret: {
    want: boolean,
    tried: boolean,
    irritationLevel: number,
    pregnant: boolean,
  },
}

export interface FormStep6 {
  acneLevel: string,
}


export type quizState = {
 progress: number;
} & FormStep1 & FormStep2 & FormStep3 & FormStep4 & FormStep5 & FormStep6; 

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
  progress: 0,

}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    chooseSkintype: (state, action: PayloadAction<string>) => { state.skintype = action.payload },
    isSensitive: (state, action) => { state.isSensitive = action.payload },
    mainGoal: (state, action) => { state.mainGoal = action.payload },
    allConcerns: (state, action) => { state.concerns.push(action.payload) },
    wantTret: (state, action) => { state.tret.want = action.payload },
    triedTret: (state, action) => { state.tret.tried = action.payload },
    tretIrritation: (state, action) => { state.tret.irritationLevel = action.payload },
    pregnant: (state, action) => { state.tret.pregnant = action.payload },
    acneLevel: (state, action) => { state.acneLevel = action.payload },
    progressLevel: (state,action) => {state.progress = action.payload}

  }
})

export const { chooseSkintype, isSensitive, mainGoal, allConcerns, wantTret, triedTret, tretIrritation, pregnant, acneLevel } = quizSlice.actions

export default quizSlice.reducer