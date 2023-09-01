
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep3 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step3: React.FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep3> = (data) => {
        WizardStore.update((s) => {
            s.progress = 34;
            s.mainGoal = data.mainGoal as string
        });
        navigate("/step-4")
    };

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">What is your Main Skin Goal?</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400 text-xs">Pick only one skin goal</p>



                        <div className="flex mt-6 ">
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden" type="radio"
                                        {...register("mainGoal")}
                                        value="acne"

                                    />
                                    {/* <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">ACNE</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Clear and Get rid of acne</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("mainGoal")}
                                        value="wrinkles"

                                    />
                                    {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">WRINKLES</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Treat Fine Lines</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("mainGoal")}
                                        value="rosacea"

                                    />
                                    {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">ROSACEA</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Help reduce reddnes in the skin</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("mainGoal")}
                                        value="hyperpigmentation"

                                    />
                                    {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">DARK SPOTS</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Help get rid of dark spots and even out skin</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("mainGoal")}
                                        value="dry"

                                    />
                                    {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">DRY</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Dry Skin that always feel tight and dry</span>
                                </label>
                            </div>
                            <div className="radio-btn p-2 ">
                                <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("mainGoal")}
                                        value="pores"

                                    />
                                    {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} /> */}
                                    <span className="text-xl text-gray-400 tracking-widest pt-2">PORES</span>
                                    <span className="w-40 text-xs m-auto mt-2 text-gray-400">Large visible looking pores, like whiteheads, blackheads</span>
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

export default Step3;