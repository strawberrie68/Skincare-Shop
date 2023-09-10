
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep1 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
import Combo from "@/assets/quizIcons/CloudSun.svg"
import Oily from "@/assets/quizIcons/Umbrella.svg"

import { ChevronRightIcon } from "@heroicons/react/20/solid";






const Step1: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep1> = (data) => {
        WizardStore.update((s) => {
            s.progress = 12;
            s.skintype = data.skintype as string
        });
        navigate("/step-2")
    };



    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-200 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-1/12 `}></div>
            </div>
            <div className=" mt-24 h-full w-4/5 m-auto">

                <p className="text-3xl ml-0">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400">Q1 What is your skintype?</p>


                        <div className="mt-10 grid grid-cols-2 gap-2 mx-auto sm:flex sm:justify-center ">
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden" type="radio"
                                        {...register("skintype", { required: true })}
                                        value="dry"

                                    />
                                    <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">DRY</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 ">Skin that is scaly and flaky. Feels tight after washing</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("skintype", { required: true })}

                                        value="normal"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">NORMAL</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Doesn't feel dry or oily after washing</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("skintype", { required: true })}
                                        value="combo"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">COMBO</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin that feel oily in the t-zone and normal/dry on the cheeks</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("skintype", { required: true })}
                                        value="oily"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">OILY</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin is oily immedaitely after washing</span>
                                </label>
                            </div>

                        </div>
                        <div className="text-center mt-4 text-red-300 text-sm">
                            {errors.skintype && <span>Choose your skintype</span>}
                        </div>

                    </div>

                    {/* TOGGLE NEXT AND BACK BUTTONS */}

                    <div className="flex justify-end">


                        <button
                            className="border w-30 mt-8 h-8 px-4 rounded-lg bg-gray-600 text-white m-2 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "

                        >
                            <div className="flex justify-center items-center">
                                <span className="ml-2">Next</span>
                                <ChevronRightIcon className="h-6 w-6 " />
                            </div>
                        </button>


                    </div>






                </form>
                <DevTool control={control} />
            </div>

        </div>
    );
};

export default Step1;