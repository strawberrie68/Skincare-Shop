
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep4 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
import Combo from "@/assets/quizIcons/CloudSun.svg"
import Oily from "@/assets/quizIcons/Umbrella.svg"

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step4: React.FC = () => {
    const {
        register,
        handleSubmit,
        // getValues,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep4> = (data) => {
        WizardStore.update((s) => {
            s.progress = 34;
            s.concerns = [...s.concerns, ...data.concerns]
        });
        navigate("/step-5")
    };

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400">Q4 What are your other skin concerns?</p>
                        <p className="text-gray-400">Check all that applies</p>


                        <div className="flex mt-6 ">
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden" type="checkbox"
                                        {...register("concerns")}
                                        value="broken-barrier"

                                    />
                                    <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Rosacea</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Reduce and calm the reddness in the skin</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="checkbox"
                                        {...register("concerns")}
                                        value="acne"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Clear acne</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Red spots, scaring, pimples</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="checkbox"
                                        {...register("concerns")}
                                        value="pores"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Unclog pores</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Whiteheads, blackheads or any skin texture</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="checkbox"
                                        {...register("concerns")}
                                        value="hyperpigmentation"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Dark Spots</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Uneven skin, sun damage</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="checkbox"
                                        {...register("concerns")}
                                        value="wrinkles"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Wrinkles</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Reduce the appear of fine lines</span>
                                </label>
                            </div>

                        </div>
                        <div className="text-center mt-4">
                            {errors.concerns && <span>Choose your concerns</span>}

                        </div>

                    </div>

                    {/* TOGGLE NEXT AND BACK BUTTONS */}

                    <div className="flex justify-end">
                        <button
                            className="border w-30 mt-8 h-8 px-4 rounded-lg m-2 text-gray-600 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
                            type="button"
                        >
                            <div
                                className="flex justify-center items-center"
                                onClick={goBack}
                            >
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

export default Step4;