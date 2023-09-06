
import { WizardStore } from "@/store";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/reduxHook";
import { addToCart } from "@/redux/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

type Formula = {
    ingredients: string[]
}



const FakeQuiz = {
    skintype: "combo",
    isSensitive: "false",
    mainGoal: "hyperpigmentation",
    concerns: ['acne', 'pores', 'hyperpigmentation'],
    tret: {
        want: "retinol",
        tried: "true",
        typeOfTret: "0.1%",
        irritationLevel: "low",
        pregnant: "false",
    },
    acneLevel: "zero",
    progress: 16,
}

type customSerum = {
    img: string,
    name: string,
    ingredients: string[],
    skintype: string[],
    price: number,
    category: string

}

const CustomFormula: React.FC = () => {

    const state = WizardStore.useState((s) => s);
    const [serum, setSerum] = useState<customSerum>({
        img: "https://versedskin.com/cdn/shop/files/230731_BtSS_LP_PDP_PressRestartSerum_900x.jpg?v=1690840058",
        name: "Custom Serum",
        ingredients: [],
        skintype: [state.skintype],
        price: 40,
        category: "Serum"
    })
    const [customFormulation, setCustomFormulation] = useState(["Anua Heartleaf"]);
    const [tretFormula, setTretFormula] = useState("")


    useEffect(() => {

        const formulationIngredients: string[] = []
        FakeQuiz.concerns.map((item) => {
            switch (item) {
                case "broken-barrier":
                    formulationIngredients.push("mugwort", "centella")
                    break;
                case "acne":
                    formulationIngredients.push("mugwort", "centella", "PHA", "spironolactone");
                    break;
                case "pores":
                    formulationIngredients.push("BHA", "niacinamide", "AHA");
                    break;
                case "hyperpigmentation":
                    formulationIngredients.push("vitamin c", "tranexamic acid", "koji acid", "arbutin");
                    break;
                case "wrinkles":
                    formulationIngredients.push("AHA", "Ceramides", "Gingseng", "niacinamide", "copper peptide", "multi-peptide");
                    break;
                default:
                    formulationIngredients.push("mugwort", "centella");

            }


        })

        setCustomFormulation(formulationIngredients)
        console.log(customFormulation)


    }, [CustomFormula])

    useEffect(() => {


        if (FakeQuiz.tret.want == "retinol") {

            if (FakeQuiz.tret.pregnant == "true") {
                setTretFormula("bakuchiol")
            } else {
                if (FakeQuiz.tret.tried == "true") {
                    function checkIrritation() {

                        switch (FakeQuiz.tret.irritationLevel) {
                            case "low":
                                setIncreaseOrNot("increase")
                                break;
                            case "medium":
                                setIncreaseOrNot("stay")
                                break;
                            case "high":
                                setIncreaseOrNot("decrease")
                                break;

                        }
                        console.log(increaseOrNot)
                    }

                } else {
                    setTretFormula("0.025%")
                }
            }
        }

    })
    const [increaseOrNot, setIncreaseOrNot] = useState("")


    useEffect(() => {
        const tretPercent = ["0.025%", "0.05%", "0.1%"]
        let matchedIndex = tretPercent.indexOf(FakeQuiz.tret.typeOfTret)
        let tret;

        if (increaseOrNot == "increase" && matchedIndex == 2 ||
            increaseOrNot == "decrease" && matchedIndex == 0) {
            tret = FakeQuiz.tret.typeOfTret
        } else if (increaseOrNot == "increase") {
            matchedIndex = matchedIndex + 1
            tret = tretPercent[matchedIndex]

        } else if (increaseOrNot == "increase") {
            matchedIndex = matchedIndex - 1
            tret = (tretPercent[matchedIndex])
        } else {
            tret = (FakeQuiz.tret.typeOfTret)
        }

        setTretFormula(`${tret} Tretinoin`)



    }, [increaseOrNot])

    useEffect(() => {
        const combinedFormula = customFormulation.concat(tretFormula)
        const cleanedCombinedFormula = [...new Set(combinedFormula)].sort()

        setSerum(prev => ({
            ...prev,
            ingredients: cleanedCombinedFormula
        }))



    }, [tretFormula])

    console.log(serum)
    console.log(tretFormula)



    const dispatch = useAppDispatch();

    const onSubmit = async (product: customSerum) => {
        try {
            dispatch(addToCart(product))

            toast(' 🔥 Item was added to cart ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


        } catch (err) {
            console.log(err)

            toast.error('Item was not added', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }




    return (
        <div className="mt-8 flex flex-col">
            <div className="flex flex-col-reverse mb-12 sm:flex-row sm:justify-between">
                <div className="mr-10 xxs:mt-6 w-full xxs:mx-auto mt-4 sm:ml-0 sm:w-1/2" >

                    <p className="text-gray-400 text-sm ">Our doctors and dermatologist will formulate the most effective serum for your unqiue skin type</p>
                    <p className="text-gray-400 text-sm mt-2">Your custom serum will include: </p>
                    <p className="xxs:w-auto text-sm  font-medium mt-6 bg-primary-10 w-56 px-2 py-1 opacity-60">3 of These Ingredients</p>
                    <div className="flex flex-wrap mt-4  xxs:w-full">
                        {serum.ingredients.map((ingredient) =>
                            <div className="w-auto ">
                                <p className="border-primary-10 border px-4 py-2 mt-2 mr-2 rounded-lg text-xs">{ingredient}</p>
                            </div>

                        )}

                    </div>


                </div>
                <div>
                    <img
                        src="https://versedskin.com/cdn/shop/files/230731_BtSS_LP_PDP_PressRestartSerum_900x.jpg?v=1690840058"
                        className="w-4/5 max-w-sm mx-auto"
                    />

                </div>

            </div>
            <button
                className="border-2 bg-white rounded-lg text-gray-500 mt-2 px-4 py-2 hover:bg-black hover:text-primary-500"
                onClick={() => onSubmit(serum)}
            >
                $40 - Add to cart
            </button>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />


        </div>
    )
}

export default CustomFormula