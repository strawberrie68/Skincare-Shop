
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep7 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"


import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step7Half: React.FC = () => {
    const {
        register,
        handleSubmit,
        // getValues,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep7> = (data) => {
        if (data.tret.tried == "true") {
            WizardStore.update((s) => {
                s.progress = 87;
                s.tret.want = data.tret.tried
            });
            navigate("/step-7")

        } else {
            WizardStore.update((s) => {
                s.progress = 84;
                s.tret.want = data.tret.tried
            });
            navigate("/step-8")

        }
    };

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-9/12 `}></div>
            </div>
            <div className=" mt-24 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400">Hav you tried Tretinoin?</p>


                        <div className="flex flex-col xs:flex-row mt-6 justify-center items-center ">
                            <div className="radio-btn p-2 group">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        type="radio"
                                        {...register("tret.tried", { required: true })}
                                        value="true"
                                        className="hidden"
                                    />
                                    <img className="w-10  bg-primary-10  m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <div className="basis-1/2">
                                        <span className="quiz-answer text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-600 group-hover:font-medium">YES</span>
                                        <p className="quiz-answer-blurb w-[180px] text-gray-400 group-hover:text-gray-600 text-xs mt-4">I have tried tretinoin </p>

                                    </div>

                                </label>
                            </div>
                            <div className="radio-btn p-2 hover:text-gray-600 group">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg  ">
                                    <input
                                        type="radio"
                                        {...register("tret.tried", { required: true })}
                                        value="false"
                                        className="hidden"

                                    />
                                    <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <span className=" text-xl text-gray-400 tracking-widest pt-2  group-hover:text-gray-500 group-hover:font-medium">NO</span>
                                    <p className="w-[180px] text-gray-400 group-hover:text-gray-500 text-xs mt-4 mb-4">I have not tried tretinoin, but I may have tried retinol</p>

                                </label>
                            </div>




                        </div>

                        <div className="text-center mt-4 text-red-300 text-sm">
                            {errors.tret?.tried && <span>Hav you tried tretinoin? </span>}

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

export default Step7Half;