import { WizardStore } from "@/store";
import NavBar from "@/componets/NavBar"
import products from "@/shared/products"
import { useEffect, useState } from "react";
import { ProductType } from "@/shared/types";
import ProductCard from "@/componets/ProductCard";
import { Link } from "react-router-dom";



//Icons for skinconcerns



interface GroupedProduct {
    [category: string]: ProductType[];
}


const Result: React.FC = () => {
    const state = WizardStore.useState((s) => s);
    const [theirSkintype, setTheirSkintype] = useState("")
    const [productForSkintype, setProductForSkintype] = useState(Array<ProductType>)
    const [productsForSkinGoal, setProductsForSkinGoal] = useState(Array<ProductType>)
    const [groupedProducts, setGroupedProducts] = useState<GroupedProduct | undefined>(undefined);
    const [bestProducts, setBestProduct] = useState<(ProductType)[]>(Array<ProductType>)


    const [maxProductIndex, setMaxProductIndex] = useState(0)

    useEffect(() => {

        if (state.isSensitive == "true" || state.acneLevel == "high" || state.acneLevel == "some") {
            setTheirSkintype("reparing")
        } else {
            setTheirSkintype(state.skintype)
        }

    })

    useEffect(() => {
        switch (theirSkintype) {
            case "reparing":
                setProductForSkintype(products.filter((item) => item?.skintype?.includes("sensitive") || item?.skintype?.includes("barrier-broken")))
                break;
            case "dry":
                setProductForSkintype(products.filter((item) => item?.skintype?.includes("dry") || item?.skintype?.includes("all")))
                break;
            case "normal":
                setProductForSkintype(products.filter((item) => item?.skintype?.includes("normal") || item?.skintype?.includes("all")))
                break;
            case "oily":
                setProductForSkintype(products.filter((item) => item?.skintype?.includes("oily") || item?.skintype?.includes("all") || item?.skintype?.includes("acne") || item?.skintype?.includes("combo")))
                break;
            default:
                setProductForSkintype(products.filter((item) => item?.skintype?.includes("all")))

        }

    }, [theirSkintype])

    useEffect(() => {

        setProductsForSkinGoal(productForSkintype.filter((item) => item?.concerns?.includes(state.mainGoal)))

    }, [productForSkintype])

    useEffect(() => {

        const grouped = productsForSkinGoal.reduce((group: { [key: string]: ProductType[] }, item) => {
            if (!group[item.category]) {
                group[item.category] = [];
            }
            group[item.category].push(item);
            return group;
        }, {});

        setGroupedProducts(grouped)

    }, [productsForSkinGoal])


    useEffect(() => {

        //Will recommend the best product that matches customer skingoal and concerns

        if (groupedProducts) {
            const mapped = Object.entries(groupedProducts).map(([_, v]) => {
                if (v.length > 1) {
                    const bestProductIndex = v.map((product) =>
                        product.concerns?.map((productConcerns) =>
                            (state.concerns.includes(productConcerns) ? Number(1) : Number(0))))
                        .map((arr) => arr?.reduce((acc, c) => acc + c, 0))


                    function recommendBestProduct(arr: any) {
                        if (bestProductIndex.length == 0) {
                            return -1
                        }
                        var max = arr[0];
                        var maxIndex = 0;

                        for (var i = 1; i < arr.length; i++) {
                            if (arr[i] > max) {
                                maxIndex = i;
                                max = arr[i];
                            }
                        }

                        setMaxProductIndex(maxIndex)
                    }
                    recommendBestProduct(bestProductIndex)
                    return v[maxProductIndex]

                } else {
                    return v
                }

            });
            console.log(mapped)
            setBestProduct(mapped.flat(1))

        }

    }, [groupedProducts])


    console.log(productsForSkinGoal)

    console.log(state)


    console.log(theirSkintype)
    console.log(bestProducts)


    const FakeQuiz = {
        skintype: "combo",
        isSensitive: "false",
        mainGoal: "hyperpigmentation",
        concerns: ['acne', 'pores', 'hyperpigmentation'],
        tret: {
            want: true,
            tried: true,
            typeOfTret: "0.01%",
            irritationLevel: "low",
            pregnant: false,
        },
        acneLevel: "zero",
        progress: 16,
    }


    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>

                {state.skintype == '' &&
                    <div className="my-12 border-2 p-5 flex flex-col justify-center text-center py-16 items-center">
                        <p className="text-gray-400">Oops we did not get your quiz results</p>
                        <Link to={"/quiz"}>
                            <button className=" rounded-lg w-40 py-2 mt-8 bg-primary-10 hover:bg-black hover:text-primary-500">Take Quiz</button>
                        </Link>

                    </div>
                }
                {
                    state.skintype != '' &&
                    <div>

                        <div className="my-12 border-2 p-5 flex flex-col justify-center text-center">
                            <p>Your skin type is: </p>
                            {state.skintype != "repairing" &&
                                <div>

                                    <p className="text-2xl">{`${state.skintype.toUpperCase()}`}</p>
                                    <div className="mt-4 max-w-sm m-auto">
                                        <p className="text-sm text-gray-400">To help with your
                                            <span className="text-gray-600"> {state.mainGoal} </span> and other skin concerns  we recommend these products </p>
                                    </div>
                                </div>
                            }
                            {state.skintype == "repairing" &&
                                <div>

                                    <p className="text-2xl">Needs Healing</p>
                                    <div className="mt-4 max-w-sm m-auto">
                                        <p className="text-sm text-gray-400">To help with your
                                            <span className="text-gray-600"> sensitive and compromised skin </span>  we recommend these products </p>
                                    </div>
                                </div>
                            }
                        </div>
                        <p className="text-lg max-w-screen-md mx-auto">Your recommended products</p>

                        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-10 mt-10 max-w-screen-md mx-auto ">
                            {bestProducts.map((product: ProductType, index) =>
                                <div className="relative mx-auto">
                                    <div className="opacity-0 hover:opacity-100 hover:ease-in-out duration-300 absolute h-[250px] w-[200px] ">

                                        <div className="rounded-lg p-2 left-6 w-[150px] center-text justify-center items-center text-xs absolute -top-8 bg-white  shadow shadow-slate-200 h-auto py-2 opacity-9  ">
                                            <div className="w-[120px] flex-wrap p-2">
                                                <div className="">
                                                    This {product.category.toLocaleLowerCase()} is good for

                                                    {` ${product.concerns?.join(' , ')
                                                        .replace("hyperpigmentation", "dark spots")
                                                        .replace(/,(?!.*,)/gmi, ' and')}
                                                        
                                                        `}




                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <ProductCard
                                        img={product.img}
                                        product={product}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        key={index}

                                    />
                                </div>


                            )}

                        </div>
                    </div>
                }










            </div>

        </div>
    );
};

export default Result;