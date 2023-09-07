
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep7 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"



import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step7: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep7> = (data) => {
        WizardStore.update((s) => {
            s.progress = 90;
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
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-10/12 `}></div>
            </div>
            <div className=" mt-24 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-lg mb-6">Tell us your experince with Tretinoin</p>

                        <div>
                            <p className="text-gray-400 font-medium">What was your level of irritation</p>
                            <div className="flex mt-6 justify-center ">

                                <div className="p-2 group ">
                                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.irritationLevel", { required: true })}

                                            value="low"

                                        />

                                        <span className="text-xl text-gray-400 tracking-widest pt-2  group-hover:text-gray-600">LOW</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-600">Some peeling and little to no irrtation</p>


                                    </label>
                                </div>
                                <div className="p-2 group">
                                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.irritationLevel", { required: true })}

                                            value="medium"

                                        />

                                        <span className="text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-600">MED</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-600">Some peeling and a little peeling</p>


                                    </label>
                                </div>
                                <div className="p-2 group">
                                    <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.irritationLevel", { required: true })}

                                            value="high"

                                        />

                                        <span className="text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-600">HIGH</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-600">Experinced painful stinging and irritation</p>


                                    </label>
                                </div>



                            </div>
                            <div className="text-center mt-4 text-red-300 text-sm">
                                {errors.tret?.irritationLevel && <span>Select an irritation level</span>}

                            </div>

                        </div>
                        <div>
                            <p className="text-gray-400 font-medium">What percenatge did you use?</p>
                            <div className="flex pt-2 justify-center w-full items-center ">
                                <div className="p-2 basis-1/3 group">
                                    <label className="justify-center h-[100px] flex flex-col text-center  px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.typeOfTret")}

                                            value="0.025%"

                                        />
                                        <span className="text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-500">0.025%</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-500">Tretinoin</p>



                                    </label>
                                </div>
                                <div className="p-2  basis-1/3 group">
                                    <label className=" justify-center h-[100px] flex flex-col text-center px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.typeOfTret")}

                                            value="0.05%"

                                        />
                                        <span className="text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-500">0.05%</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-500">Tretinoin</p>



                                    </label>
                                </div>
                                <div className="p-2  basis-1/3 group">

                                    <label className=" justify-center h-[100px] flex flex-col text-center  px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("tret.typeOfTret")}

                                            value="0.1%"

                                        />

                                        <span className="text-xl text-gray-400 tracking-widest pt-2 group-hover:text-gray-500">0.1%</span>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-500">Tretinoin</p>



                                    </label>
                                </div>
                            </div>

                            <div className="text-center mt-4 text-red-300 text-sm">
                                {errors.tret?.typeOfTret && <span>Select an answer</span>}

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