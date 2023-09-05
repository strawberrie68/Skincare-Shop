import { registerInDevtools, Store } from "pullstate";


export interface FormStep1 {
    skintype: string;
  }
  
  export interface FormStep2 {
    isSensitive: string,
  }
  
  export interface FormStep3 {
    mainGoal: string,
  }
  
  export interface FormStep4 {
    concerns: string[],
  }
  
  export interface FormStep5 {
    tret: {
      want: string,
    },
  }

  export interface FormStep6 {
    tret: {
      pregnant: boolean,
      
    },
  }

  export interface FormStep7 {
    tret: {
      tried: boolean,
      typeOfTret: string,
      irritationLevel: string,
    },
  }
  export interface FormStep8 {
    acneLevel: string,
  }
  
  
  export type FormValues = {
   progress: number;
  } & FormStep1 & FormStep2 & FormStep3 & FormStep4 & FormStep5 & FormStep6 & FormStep7 & FormStep8; 

export const WizardStore = new Store<FormValues>({
    skintype: "",
    isSensitive: "false",
    mainGoal: "",
    concerns: [],
    tret: {
      want: "noRetinol",
      tried: false,
      typeOfTret: "0.0025%",
      irritationLevel: "low",
      pregnant: false,
    },
    acneLevel: "zero",
    progress: 0,
});

registerInDevtools({
  WizardStore,
});
