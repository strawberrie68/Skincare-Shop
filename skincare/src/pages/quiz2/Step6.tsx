
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep6 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";





const Step6: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep6> = (data) => {
        WizardStore.update((s) => {
            s.progress = 72;
            s.tret.pregnant = data.tret.pregnant
        });
        navigate("/steps-7")
    };

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-7/12 `}></div>
            </div>
            <div className=" mt-24 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <p className="text-gray-400">Q6 Pregnant or breastfeeding</p>
                        <span className="w-40  m-auto mt-2 text-gray-400 mb-4">If you are:</span>
                        <ul className="mt-4 list-disc ml-3">
                            <li className="text-sm">Pregnant</li>
                            <li className="text-sm">Breastfeeding</li>
                            <li className="text-sm">Trying to get pregnent</li>
                        </ul>


                        <div className="flex mt-10 justify-center flex-col sm:flex-row ">
                            <div className="radio-btn p-2 basis-1/2 ">
                                <label className=" h-[90px] flex flex-col text-center px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                    <input
                                        className="hidden" type="radio"
                                        {...register("tret.pregnant", { required: true })}
                                        value="true"

                                    />

                                    <span className="text-xl text-gray-400 tracking-widest pt-2">True</span>
                                    <p className="text-xs mt-4">I'm pregnant or trying!</p>

                                </label>
                            </div>
                            <div className="radio-btn p-2 basis-1/2 ">
                                <label className="h-[90px] flex flex-col text-center justify-center px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl  hover:shadow-md ">
                                    <input
                                        className="hidden"
                                        type="radio"
                                        {...register("tret.pregnant", { required: true })}

                                        value="false"

                                    />

                                    <span className="text-xl text-gray-400 tracking-widest pt-2">False</span>
                                    <p className="text-xs mt-4">Not pregnant or trying</p>


                                </label>
                            </div>



                        </div>
                        <div className="text-center mt-4 text-red-300 text-sm">
                            {errors.tret?.pregnant && <span>Select an answer</span>}

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

export default Step6;