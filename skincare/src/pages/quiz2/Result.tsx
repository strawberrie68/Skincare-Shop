import { WizardStore } from "@/store";
import NavBar from "@/componets/NavBar"
import products from "@/shared/products"
import { useEffect, useState } from "react";
import { ProductType } from "@/shared/types";



interface GroupedProduct {
    [category: string]: ProductType[];
}


const Result: React.FC = () => {
    const state = WizardStore.useState((s) => s);
    const [theirSkintype, setTheirSkintype] = useState("")
    const [productForSkintype, setProductForSkintype] = useState(Array<ProductType>)
    const [productsForSkinGoal, setProductsForSkinGoal] = useState(Array<ProductType>)
    const [groupedProducts, setGroupedProducts] = useState<GroupedProduct | undefined>(undefined);

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
        console.log(productsForSkinGoal)

    }, [productForSkintype])

    useEffect(() => {



        const grouped = productsForSkinGoal.reduce((group: { [key: string]: ProductType[] }, item) => {
            if (!group[item.category]) {
                group[item.category] = [];
            }
            group[item.category].push(item);
            return group;
        }, {});

        console.log(grouped)
        setGroupedProducts(grouped)
        console.log(grouped)



        // function reduceToOnePerCategory(arry) {
        //     arry.map((category:string[]) => {
        //         if (category.length > 1) {
        //             const test = category.map((productConcerns) =>
        //                 state.concerns.includes(productConcerns) ? Number(1) : Number(0))
        //                 // .map((arr) => arr?.reduce((acc, c) => acc + c, 0))
        //             console.log(test)
        //         }
        //     })



        // }
        // reduceToOnePerCategory(groupedProducts)


    }, [productsForSkinGoal])
    console.log(groupedProducts)


    useEffect(() => {

        //Get the categorized product
        //if category has more than one
        //pick the one that matches the most

        if (groupedProducts) {
            const mapped = Object.entries(groupedProducts).map(([k, v]) => {
                if (v.length > 1) {
                    const bestProductIndex = v.map((product) =>
                        product.concerns?.map((productConcerns) =>
                            (state.concerns.includes(productConcerns) ? Number(1) : Number(0))))
                        .map((arr) => arr?.reduce((acc, c) => acc + c, 0))
                    

                // const productConcerns = v.map((product) => product.concerns)
                // const compareConcerns = productConcerns?.map((concern)=> state.concerns.includes(concern)? Number(1) : Number(0))



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

        }






    }, [groupedProducts])





    useEffect(() => {

        //     // const reccommendedToner = productsForSkinGoal.filter((item) => item.category == "Toner")


        let reduceproduct = productsForSkinGoal.map((product) =>
            product.concerns?.map((productConcerns) =>
                (state.concerns.includes(productConcerns) ? Number(1) : Number(0))))
            .map((arr) => arr?.reduce((acc, c) => acc + c, 0))

        function recommendBestProduct(arr: any) {
            if (reduceproduct.length == 0) {
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
        recommendBestProduct(reduceproduct)



    }, [productsForSkinGoal])



    console.log(productsForSkinGoal)

    console.log(state)


    console.log(theirSkintype)
    console.log(productsForSkinGoal[maxProductIndex])

    //got the best product ->need to categorize ->reduce to help organize by category
    //if there are more than one product in a category
    //filter so there is at least one






    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>
                <div>
                    <p>your skin type is {state.skintype}</p>
                </div>





            </div>

        </div>
    );
};

export default Result;