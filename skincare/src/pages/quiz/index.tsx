import { SkinType, QuizType } from "@/shared/types";
import { useForm, SubmitHandler } from "react-hook-form";
import NavBar from "@/componets/NavBar"
import { useState } from "react";
import { DevTool } from "@hookform/devtools"
import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
import Combo from "@/assets/quizIcons/CloudSun.svg"
import Oily from "@/assets/quizIcons/Umbrella.svg"
import { ChevronRightIcon } from "@heroicons/react/20/solid";


type FormValues = {
  skintype: string,
  isSensitive: boolean,
  mainGoal: string,
  concerns: string[],
  tret: {
    want: boolean,
    tried: boolean,
    irritationLevel: string,
    pregnant: boolean,
  },
  acneLevel: string,
};

const quiz = () => {
  const { register, handleSubmit, control, } = useForm<FormValues>({
    defaultValues: {
      skintype: "normal",
      isSensitive: false,
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
  });

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  const [formStep, setFormStep] = useState(0)

  return (
    <div className="bg-white h-full">
      <NavBar />
      <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12">
        <div className="mx-auto w-5/6" >

          <p className="mt-16 text-3xl bold">Quiz</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <div className="mt-4">
                <p>What is your skintype?</p>


                <div className="flex mt-6 ">
                  <div className="radio-btn p-2 ">
                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                      <input className="hidden" type="radio" {...register("skintype")} value="dry"  />
                      <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                      <span className="text-xl text-gray-400 tracking-widest pt-2">DRY</span>
                      <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin that is scaley and flaky. Feels tight after washing</span>
                    </label>
                  </div>
                  <div className="radio-btn p-2 ">
                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                      <input className="hidden" type="radio" {...register("skintype")} value="normal"  />
                      <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                      <span className="text-xl text-gray-400 tracking-widest pt-2">NORMAL</span>
                      <span className="w-40 text-xs m-auto mt-2 text-gray-400">Doesn't feel dry or oily after washing</span>
                    </label>
                  </div>
                  <div className="radio-btn p-2 ">
                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                      <input className="hidden" type="radio" {...register("skintype")} value="dry"  />
                      <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} />
                      <span className="text-xl text-gray-400 tracking-widest pt-2">COMBO</span>
                      <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin that feel oily in the t-zone and normal/dry on the cheeks</span>
                    </label>
                  </div>
                  <div className="radio-btn p-2 ">
                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                      <input className="hidden" type="radio" {...register("skintype")} value="dry"  />
                      <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} />
                      <span className="text-xl text-gray-400 tracking-widest pt-2">OILY</span>
                      <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin is oily immedaitely after washing</span>
                    </label>
                  </div>

                </div>
              </div>
              <div className="flex justify-end">
                <button className="border w-30 mt-8 h-8 px-4 rounded-lg bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-white hover: hover:text-primary-500 hover:shadow-lg hover:shadow-primary-10">
                  <div className="flex justify-center items-center">
                  <span className="ml-2">Next</span> 
                    <ChevronRightIcon className="h-6 w-6 "/>

                  </div>
                </button>

              </div>
            </section>
          </form>
          <DevTool control={control} />


        </div>

      </div>





    </div>
  )
}

export default quiz
