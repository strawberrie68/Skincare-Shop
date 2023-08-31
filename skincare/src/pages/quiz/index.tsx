// import { useForm, SubmitHandler } from "react-hook-form";
import NavBar from "@/componets/NavBar"
// import { DevTool } from "@hookform/devtools"
import { useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useMultiStepForm } from "./useMultiStepForm";

import QuizQ1 from "./QuizQ1";
import QuizQ2 from "./QuizQ2";
import QuizQ3 from "./QuizQ3";
// // import QuizQ4 from "./QuizQ4";
// import QuizQ5 from "./QuizQ5";
// import QuizQ6 from "./QuizQ6";
import { FormEvent } from "react";

// type FormValues = {
//   skintype: string,
//   isSensitive: boolean,
//   mainGoal: string,
//   concerns: string[],
//   tret: {
//     want: boolean,
//     tried: boolean,
//     irritationLevel: string,
//     pregnant: boolean,
//   },
//   acneLevel: string,
// };
type FormData = {
  skintype: string,
  isSensitive: string,
  mainGoal: string,
  concerns: string[],
  tret: {
    want: boolean,
    tried: boolean,
    irritationLevel: string,
    pregnant: boolean,
  },
  acneLevel: string,

}

const INITAL_DATA: FormData = {
  skintype: "normal",
  isSensitive: "false",
  mainGoal: "none",
  concerns: [],
  tret: {
    want: false,
    tried: false,
    irritationLevel: "low",
    pregnant: false,
  },
  acneLevel: "low",


}

const quiz = () => {
  const [ data, setData ] = useState(INITAL_DATA);
  function updateFields (fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }


  // const { register, handleSubmit, control, } = useForm<FormValues>({
  //   defaultValues: {
  //     skintype: "normal",
  //     isSensitive: false,
  //     mainGoal: "none",
  //     concerns: [],
  //     tret: {
  //       want: false,
  //       tried: false,
  //       irritationLevel: "low",
  //       pregnant: false,
  //     },
  //     acneLevel: "low",

  //   }
  // });

  const { step, isFirstStep, back, next,isLastStep } = useMultiStepForm([
    <QuizQ1 {...data} updateFields={updateFields}/>,
    <QuizQ2 {...data} updateFields={updateFields}/>, 
    <QuizQ3 {...data} updateFields={updateFields}/>, 
    // <QuizQ4 {...data} updateFields={updateFields}/>, 
    // <QuizQ5 {...data} updateFields={updateFields}/>,
    // <QuizQ6 {...data} updateFields={updateFields}/>
  ])

  function onSubmit (e: FormEvent){
    e.preventDefault();
    next();

  }
  console.log(data)


  return (
    <div className="bg-white h-full">
      <NavBar />
      <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12">
        <div className="mx-auto w-5/6" >

          <p className="mt-16 text-3xl bold">Quiz</p>
          <form onSubmit={(onSubmit)}>
            <section>

              {step}
     
            <div className="flex justify-end">

            { !isFirstStep &&
             <button 
              className="border w-30 mt-8 h-8 px-4 rounded-lg m-2 text-gray-600 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
              type="button"
              onClick={back}
            >
                  <div className="flex justify-center items-center">
                    <ChevronLeftIcon className="h-6 w-6 " />
                    <span className="ml-2">Back</span>
                  </div>
                </button>
            }

            
              <button 
                className="border w-30 mt-8 h-8 px-4 rounded-lg bg-gray-600 text-white m-2 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
              >
                    <div className="flex justify-center items-center">
                      <span className="ml-2">
                        { isLastStep ? "Finish" : "Next"}
                      </span>
                      <ChevronRightIcon className="h-6 w-6 " />
                    </div>
              </button>
            

              </div>
            </section>
          </form>
          {/* <DevTool control={control} /> */}


        </div>

      </div>





    </div>
  )
}

export default quiz
