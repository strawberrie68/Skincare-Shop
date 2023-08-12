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
  img: string;
  name: string;
  concerns?: string[];
  skintype?: string[];
  price: number;
  category: string;
}


export interface SkinType {
  skintype: string,
  isSensitive: boolean,
  concerns: string[],
  tret: {
    want: boolean,
    tried: boolean,
    irritationLevel: number,
    pregnant: boolean,
  },
  acneLevel: string,

}

export interface QuizType {
  question: string
  answerOptions: {
    answer: string,
    value: (string | boolean)[] | string,
  }[]
}[]


