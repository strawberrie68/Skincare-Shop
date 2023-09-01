
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep8 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"
import { AcneLevel } from "@/shared/types";


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
import Combo from "@/assets/quizIcons/CloudSun.svg"
import Oily from "@/assets/quizIcons/Umbrella.svg"

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step6: React.FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep8> = (data) => {
        WizardStore.update((s) => {
            s.progress = 34;
            s.acneLevel = data.acneLevel
        });
        navigate("/results")
    };

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <p className="text-gray-400">What is your acne level? </p>


                        <div className="flex mt-6  w-[250px] ">
                            <div className="radio-btn p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("acneLevel")}

                                        value="zero"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">None</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">2-5 Acne</span>


                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("acneLevel")}

                                        value="low"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Little</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">2-5 Acne</span>


                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("acneLevel")}

                                        value="some"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Some</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">10-15 Acne</span>


                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("acneLevel")}

                                        value="high"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Lots</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">20+ Acne</span>


                                </label>
                            </div>



                        </div>
                        <div className="text-center mt-4">


                        </div>

                    </div>

                    {/* TOGGLE NEXT AND BACK BUTTONS */}

                    <div className="flex justify-end">
                        <button
                            className="border w-30 mt-8 h-8 px-4 rounded-lg m-2 text-gray-600 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
                            type="button"
                        >
                            <div className="flex justify-center items-center">
                                <ChevronLeftIcon className="h-6 w-6 " />
                                <span className="ml-2">Back</span>
                            </div>
                        </button>



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

export default Step6;