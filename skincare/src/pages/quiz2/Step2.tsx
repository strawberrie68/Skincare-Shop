
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { WizardStore, FormStep2 } from "@/store";
import { DevTool } from "@hookform/devtools"
import NavBar from "@/componets/NavBar"


import Water from "@/assets/quizIcons/water.svg"
import Fire from "@/assets/quizIcons/fire.svg"


import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";




const Step2: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: WizardStore.useState((s) => s) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormStep2> = (data) => {
        WizardStore.update((s) => {
            s.progress = 24;
            s.isSensitive = data.isSensitive as string
        });
        navigate("/step-3")
    };

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-24">
                <div className={`bg-primary-10 opacity-90 h-1 rounded-full w-2/12 `}></div>
            </div>
            <div className="mt-24 w-4/5 m-auto">
                <p className="text-3xl">Is your skin sensitive</p>
                <p className="text-gray-400 mt-4 text-sm">Q2 Would you say your skin is sensitive?</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col mt-6 max-w-xl mx-auto">
                        <div className="flex flex-col">
                            <div className="flex flex-col xs:flex-row mx-auto">
                                <div className="radio-btn p-2 basis-1/2">
                                    <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden" type="radio"
                                            {...register("isSensitive", { required: true })}
                                            value="false"

                                        />
                                        <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Water} />
                                        <span className="text-xl text-gray-400 tracking-widest pt-2">NOT SENSITIVE</span>
                                        <span className="w-56 text-xs m-auto mt-2 text-gray-400">Skin is rarely irritated unless I over exfoliate. </span>
                                    </label>
                                </div>
                                <div className="radio-btn p-2 basis-1/2">
                                    <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            {...register("isSensitive", { required: true })}
                                            value="true"

                                        />
                                        <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Fire} />
                                        <span className="text-xl text-gray-400 tracking-widest pt-2">SENSITIVE</span>
                                        <span className="w-56 text-xs m-auto mt-2 text-gray-400">
                                            <ul>
                                                <li>My skin is usually red and easily irritated</li>
                                                <li>I have rosacea</li>
                                                <li>I have both dry skin and acne</li>
                                                <li>I am currently using retinol</li>
                                            </ul>
                                        </span>
                                    </label>
                                </div>

                            </div>

                            <div className="text-center mt-4 text-red-300 text-sm">
                                {errors.isSensitive && <span> Please choose an option</span>}
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
                    </div>





                </form>
                <DevTool control={control} />
            </div>

        </div>
    );
};

export default Step2;