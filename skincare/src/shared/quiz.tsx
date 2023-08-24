import { QuizType } from "@/shared/types"

const quizQuestion: Array<QuizType> = [
    {
        question: "What is you main skin concern?",
        answerOptions: [
          {
            answer: "clear ance",
            value: ["tret"]
          },
          {
            answer: "wrinkles",
            value: ["tret"]
          },
          {
            answer: "roseasa",
            value: ["alzelic acid"]
          },
          {
            answer: "brightening",
            value: ["vitamin c"]
          },
        ]
    
      },
      {
        question: "What is your level of acne",
        answerOptions: [
          {
            answer: "zero or one pimple",
            value: ["nicinamide", "calming"]
          },
          {
            answer: "3 pimples",
            value: ["niacinamide", "mugwort", "AHA", "BHA"]
          },
          {
            answer: "Small, not easily noticed all over",
            value: ["tret"]
          },
          {
            answer: "Large or medium and only visible in the T-zone",
            value: ["tret", "spiro"]
          },
        ]
    
      },
    {
      question: "Which most closely describes the look of your pores?",
      answerOptions: [
        {
          answer: "Large and visible all over",
          value: ["oily"]
        },
        {
          answer: "Medium-sized all over",
          value: ["combo"]
        },
        {
          answer: "Small, not easily noticed all over",
          value: ["dry"]
        },
        {
          answer: "Large or medium and only visible in the T-zone",
          value: ["combo"]
        },
      ]
  
    },
    {
      question: "When does your skin look red",
      answerOptions: [
        {
          answer: "red everyday",
          value: ["sensitive"]
        },
        {
          answer: "More often than I care to admit",
          value: ["sensitive"]
        },
        {
          answer: "Anytime I have blemishes",
          value: ["combo", "oily"]
        },
        {
          answer: "Sometimes, but only around my cheeks",
          value: ["rosacea"]
        },
      ]
  
    },

      // Tret questions
      {
        question: "Would you like to include tretinoin?",
        answerOptions: [
          {
            answer: "true",
            value: "includeTret"
          },
          {
            answer: "false",
            value: "skip"
          },
   
        ]
    
      },
      {
        question: "Have you tried tretinoin?",
        answerOptions: [
          {
            answer: "true",
            value: "includeTret"
          },
          {
            answer: "false",
            value: "skip"
          },
   
        ]
    
      },
      {
        question: "How did you react to tretinoin?",
        answerOptions: [
          {
            answer: "zero",
            value: "low"
          },
          {
            answer: "some peeling",
            value: "mid"
          },
          {
            answer: "burns",
            value: "high"
          },
   
        ]
    
      },
      {
        question: "Breastfeeding or pregnat",
        answerOptions: [
          {
            answer: "I'm pregnant",
            value: "true"
          },
          {
            answer: "I'm breastfeeding",
            value: "true"
          },
          {
            answer: "I'm trying to get pregnat",
            value: "true"
          },
          {
            answer: "None above",
            value: "false"
          },
   
        ]
    
      },
    
  
  ];

  export default quizQuestion