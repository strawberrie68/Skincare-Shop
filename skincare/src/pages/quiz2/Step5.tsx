
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep5 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
// import Combo from "@/assets/quizIcons/CloudSun.svg"
// import Oily from "@/assets/quizIcons/Umbrella.svg"

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step5: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep5> = (data) => {
        if (data.tret.want == "noRetinol") {
            WizardStore.update((s) => {
                s.progress = 60;
                s.tret.want = data.tret.want
            });
            navigate("/step-8")

        } else {
            WizardStore.update((s) => {
                s.progress = 34;
                s.tret.want = data.tret.want
            });
            navigate("/step-6")

        }
    };

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-6/12 `}></div>
            </div>
            <div className=" mt-24 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400">Q5 Would you like to add Retinol?</p>


                        <div className="flex flex-col mt-6 justify-center xs:flex-row">
                            <div className="radio-btn p-2 w-full">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden" type="radio"
                                        {...register("tret.want", { required: true })}
                                        value="retinol"

                                    />
                                    <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Add Retinol</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">If you want skin that is</span>
                                    <ul>
                                        <li className="text-xs">Smooth Skin</li>
                                        <li className="text-xs">Clear Skin</li>
                                        <li className="text-xs">Reduce fine lines</li>
                                    </ul>
                                </label>
                            </div>
                            <div className="radio-btn p-2 w-full">
                                <label className=" h-[250px]  flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.want", { required: true })}

                                        value="noRetinol"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">Skip Retonol</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400 mb-4">Might not be reccommended if</span>
                                    <ul>
                                        <li className="text-xs">sensitive skin</li>
                                        <li className="text-xs">pregnant</li>
                                        <li className="text-xs">bad experince</li>
                                    </ul>
                                </label>
                            </div>



                        </div>
                        <div className="text-center mt-4 text-red-300 text-sm">
                            {errors.tret?.want && <span>Choose your skintype</span>}
                        </div>

                    </div>

                    {/* TOGGLE NEXT AND BACK BUTTONS */}

                    <div className="flex justify-end">
                        <button
                            className="border w-30 mt-8 h-8 px-4 rounded-lg m-2 text-gray-600 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
                            type="button"
                            onClick={goBack}
                        >
                            <div className="flex justify-center items-center">
                                <ChevronLeftIcon className="h-6 w-6 " />
                                <span className="ml-2">Back</span>
                            </div>
                        </button>



                        <button
                            className="border w-30 mt-8 h-8 px-4 rounded-lg bg-gray-600 text-white m-2 hover:text-primary-500 hover:shadow-lg hover:shadow-amber-100 "
                        >
                            <div
                                className="flex justify-center items-center"

                            >
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

export default Step5;