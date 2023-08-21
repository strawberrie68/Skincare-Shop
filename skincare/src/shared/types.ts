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
  