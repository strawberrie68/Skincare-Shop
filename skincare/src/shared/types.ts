export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurRoutines = "ourroutines",
    Quiz = "quiz",
    Shop = "shop"  
  }


  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }

  export interface ProductType {
    img: String;
    name: String;
    concerns: String[];
    skintype: String[];
    price: Number;
    category: String;
  }
  

  export interface SkinType {
    skintype: String,
    isSensitive: boolean,
    concerns:String[],
    tret: {
      want: boolean,
      tried: boolean,
      irritationLevel: number,
      pregnant: boolean,
    },
    acneLevel:String,

  }