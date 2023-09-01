import { WizardStore } from "@/store";
import NavBar from "@/componets/NavBar"
import products from "@/shared/products"
import { useEffect, useState } from "react";
import { ProductType } from "@/shared/types";




const Result: React.FC = () => {
    const state = WizardStore.useState((s) => s);
    const [theirSkintype, setTheirSkintype] = useState("")
    const [productForSkintype, setProductForSkintype] = useState(Array<ProductType>)
    const [productsForSkinGoal, setProductsForSkinGoal] = useState(Array<ProductType>)

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

         productsForSkinGoal.reduce((group:{[key: string]: ProductType}, item)=>{
            if (!group[item.category]) {
                group[item.category] = [];
               }
               group[item.category].push(item);
               return group;

         },{})
          
       
        

        

    }, [productsForSkinGoal])



    console.log(productsForSkinGoal)

    console.log(state)


    console.log(theirSkintype)






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