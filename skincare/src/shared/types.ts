export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurRoutines = "ourroutines",
  Quiz = "quiz",
  Shop = "shop"
}

export enum AcneLevel {
  High = 10,
  Medium = 7.5,
  Low = 4,
  Zero = 0,
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

export interface customSerum {
    img: string,
    name: string,
    ingredients: string[],
    skintype: string,
    price: number,
    category: string

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


