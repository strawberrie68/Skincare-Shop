
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep7 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"


import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step7: React.FC = () => {
    const {
        register,
        handleSubmit,
        // getValues,
        control,
        // formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep7> = (data) => {
        WizardStore.update((s) => {
            s.progress = 34;
            s.tret.tried = data.tret.tried
            s.tret.irritationLevel = data.tret.irritationLevel
            s.tret.typeOfTret = data.tret.typeOfTret
        });
        navigate("/step-8")
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
                        <p className="text-gray-400">Hav you tried Tretinoin?</p>


                        <div className="flex mt-6 justify-center w-[250px]">
                            <div className="radio-btn p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        type="checkbox"
                                        {...register("tret.tried")}
                                        value="true"

                                    />
                                    <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">I have tried</span>

                                </label>
                            </div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.irritationLevel")}

                                        value="low"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">LOW</span>
                                    <p>Some peeling and little to no irrtation</p>


                                </label>
                            </div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.irritationLevel")}

                                        value="medium"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">MED</span>
                                    <p>Some peeling and a little peeling</p>


                                </label>
                            </div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.irritationLevel")}

                                        value="high"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">HIGH</span>
                                    <p>Experinced painful stinging and irritation</p>


                                </label>
                            </div>



                        </div>
                        <div className="text-center mt-4">


                        </div>
                        <div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.typeOfTret")}

                                        value="0.025%"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">0.025%</span>



                                </label>
                            </div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.typeOfTret")}

                                        value="0.05%"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">0.05%</span>



                                </label>
                            </div>
                            <div className="p-2 ">
                                <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.typeOfTret")}

                                        value="0.1%"

                                    />
                                    <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">0.1%</span>



                                </label>
                            </div>

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

export default Step7;